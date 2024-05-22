# frozen_string_literal: true

# == Schema Information
#
# Table name: line_items
#
#  id          :uuid             not null, primary key
#  quantity    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  colors_id   :bigint
#  orders_id   :bigint
#  products_id :bigint
#  sizes_id    :bigint
#
# Indexes
#
#  index_line_items_on_colors_id    (colors_id)
#  index_line_items_on_orders_id    (orders_id)
#  index_line_items_on_products_id  (products_id)
#  index_line_items_on_sizes_id     (sizes_id)
#
class LineItem < ApplicationRecord
  belongs_to :user
  belongs_to :order
  belongs_to :product, class_name: 'Admin::Product'

  has_one :reserve, class_name: 'Reserve', dependent: destroy

  delegate :store, to: :product, allow_nil: true

  def product_name
    product&.name
  end

  def product_image
    if product.images.exists?
      product.images.first.avatar.url(:thumbnail)
    else
      'http://s3.amazonaws.com/commerceassets/admin/images/avatars/000/000/089/large/data?1473265319'
    end
  end

  def product_size
    product.images.first&.avatar&.url || ''
  end

  def size_name
    size = Admin::Size.find(id: size_id)
    size&.name
  end

  def color_name
    color = Admin::Color.find_by(id: color_id)
    color&.name
  end

  def total
    product&.discounted_price.to_i * quantity.to_i
  end

  def price
    product.discounted_price.presence || 0
  end

  def self.store_ids
    includes(product: [user: :store]).map { |line| line.store.id }.uniq
  end

  def self.stores
    Store.where(id: store_ids)
  end
end
