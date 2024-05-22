# frozen_string_literal: true

class Admin::Category < ApplicationRecord
  extend FriendlyId

  has_many :ancestry, dependent: :destroy
  has_and_belongs_to_many :products, class_name: 'Admin::Product'
  has_one :image, as: :imageable, dependent: :destroy
  # belongs_to :user
  # accepts_nested_attributes_for :user
  accepts_nested_attributes_for :image, reject_if: proc { |attributes| attributes['avatar'].blank? }
  friendly_id :name, use: %i[slugged finders]

  scope :leaves, lambda {
                   joins("LEFT JOIN admin_categories AS c ON c.ancestry = CAST(admin_categories.id AS char(50))
                           OR c.ancestry = concat(admin_categories, '/', admin_categories.id)")
                     .group('admin_categories.id').having('COUNT(c.id) = 0')
                 }

  def full_name
    cat = self
    full_name = name
    while cat.parent.present?
      full_name = "#{cat.parent.name} > #{full_name}"
      cat = cat.parent
    end
    full_name
  end

  def all_products
    Admin::Product.approved.includes(:categories).where(admin_categories: { id: (descendant_ids + [id]) })
  end
end
