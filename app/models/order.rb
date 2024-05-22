# frozen_string_literal: true

# == Schema Information
#
# Table name: orders
#
#  id                   :uuid             not null, primary key
#  city                 :string
#  completed_at         :datetime
#  country              :string
#  country_state        :string
#  delivery_name        :string
#  email                :string
#  first_name           :string
#  guest_token          :string
#  last_name            :string
#  number               :string
#  payment_state        :string
#  payment_total        :decimal(10, 2)   default(0.0)
#  payment_type         :string
#  phone                :string
#  shipment_state       :string
#  special_instructions :text
#  state                :string
#  total                :decimal(10, 2)   default(0.0), not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#
class Order < ApplicationRecord
  belongs_to :customer
  has_many :line_items, dependent: :destroy
  has_many :products, through: :line_items
  has_many :reserves, class_name: 'Reserve', dependent: :destroy
  has_one :address, dependent: :destroy
  has_one :promotion, class_name: 'Admin::Promotion', dependent: :destroy

  accepts_nested_attributes_for :customer, reject_if: :all_blank, allow_destroy: true
  accepts_nested_attributes_for :address

  delegate :stores, to: :line_items, allow_nil: true

  ORDER_NUMBER_LENGTH = 9
  ORDER_NUMBER_LETTERS = false
  ORDER_NUMBER_PREFIX = 'R'
  PAYMENT_TYPES = ['Cash On Delivery'].freeze

  scope :not_cancelled, -> { where.not(state: 'cancelled') }
  scope :accountable, -> { where(state: %w[complete cancelled]) }

  before_validation :generate_order_number, on: :create

  def generate_order_number(options = {})
    options[:length] ||= ORDER_NUMBER_LENGTH
    options[:letters] ||= ORDER_NUMBER_LETTERS
    options[:prefix] ||= ORDER_NUMBER_PREFIX

    possible = (0..9).to_a
    possible += ('A'..'Z').to_a if options[:letters]

    self.number ||= loop do
      random = "#{options[:prefix]}#{(0...options[:length]).map { possible.sample }.join}"
      break random unless self.class.exists?(number: random)

      options[:length] += 1 if self.class.count > (10**options[:length] / 2)
    end
  end

  def vendor_based_sum(user_id)
    total = 0
    line_items.where(user_id: user_id).find_each do |item|
      total += item_total(item)
    end
    total
  end

  def sub_total
    total = 0
    line_items.each do |item|
      total += item_total(item)
    end
    total
  end

  def total_price
    total = sub_total
    total_delivery = stores.sum { |store| get_delivery(store) }
    total + total_delivery
  end

  def full_address
    address.present? ? "#{address.address}, #{address.city}, #{address.country_state}, #{address.country}" : 'No address found'
  end

  def permanent_address
    address = customer.addresses.first
    address.present? ? "#{address.address}, #{address.city}, #{address.country_state}, #{address.country}" : 'No address found'
  end

  def products_of(store)
    products.includes(user: :store).where(id: store.products.ids)
  end

  def get_delivery(store)
    filtered = products_of(store)
    delivery = if store.cumulative?
                 filtered.sum(:delivery)
               elsif store.max_delivery_only?
                 filtered.maximum(:delivery)
               elsif store.calculated?
                 filtered.maximum(:delivery) + filtered.average(:delivery).to_f
               end
    delivery || 0
  end

  private

  def item_total(item)
    if item.product&.discounted_price.present?
      item.quantity * item.product.discounted_price
    else
      item.quantity * item.product.price
    end
  rescue StandardError
    0
  end
end
