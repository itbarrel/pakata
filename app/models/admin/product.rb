# frozen_string_literal: true

module Admin
  class Product < ApplicationRecord
    # include PgSearch::Model
    include ApplicationHelper
    extend FriendlyId

    self.table_name = 'admin_products'

    # multisearchable against: [:name, :user_id], using: {
    #   tsearch: { prefix: true },
    #   trigram: {}
    # }
    # pg_search_scope :size_search, associated_against: {
    #   sizes: [:name]
    # }

    default_scope { joins(:user).where(users: { verified: true }).order(updated_at: :desc) }

    scope :sort_by_update, -> { order(updated_at: :desc) }
    scope :approved, -> { where(approved: true) }

    validates :price, numericality: { greater_than: 0, less_than: 2_147_483_646 }
    validates :identifier, uniqueness: true
    validates :discounted_price, numericality: { greater_than: 0, less_than: 2_147_483_646, allow_blank: true }

    has_and_belongs_to_many :categories, class_name: 'Admin::Category'
    has_many :line_items, dependent: :delete_all
    has_many :deals, class_name: 'Admin::Deal', dependent: :destroy
    belongs_to :user
    delegate :store, to: :user, allow_nil: true

    has_and_belongs_to_many :sizes, class_name: 'Admin::Size'
    has_and_belongs_to_many :colors, class_name: 'Admin::Color'
    has_many :reviews, dependent: :destroy
    has_many :reserves, class_name: 'Reserve', dependent: :destroy
    belongs_to :brand

    has_many_attached :images

    accepts_nested_attributes_for :sizes
    accepts_nested_attributes_for :colors
    accepts_nested_attributes_for :categories

    friendly_id :name, use: :slugged

    SORT_OPTIONS = [
      ['asc_price', 'Price: Lowest first'],
      ['desc_price', 'Price: Highest first'],
      ['asc_name', 'Product Name: A to Z'],
      ['desc_name', 'Product Name: Z to A'],
      ['in_stock', 'In Stock']
    ].freeze

    def self.filter_search(params, products)
      products = products.find_by_colors(products, params[:colors_ids]) if params[:colors_ids].present?
      products = products.find_by_sizes(products, params[:sizes_ids]) if params[:sizes_ids].present?
      if params[:min_price].present? && params[:max_price].present?
        products = products.find_by_price(products, params[:min_price],
                                          params[:max_price])
      end
      products
    end

    def self.find_by_colors(products, colors_ids)
      products.joins(:colors).where('admin_colors_products.color_id IN (?)', colors_ids).try(:uniq)
    end

    def self.find_by_sizes(products, sizes_ids)
      products.joins(:sizes).where('admin_products_sizes.size_id IN (?)', sizes_ids).try(:uniq)
    end

    def self.find_by_price(products, min_price, max_price)
      products.where('price >= ? AND price <= ?', min_price, max_price)
    end

    def review_avg_rating
      reviews.present? ? reviews.map(&:rate).sum.to_i / reviews.count : 0
    end

    def discount_percentage
      if discounted_price.present?
        ((1 - (discounted_price.to_f / price)) * 100).round
      else
        0
      end
    end

    def sell_quantity
      (quantity - reserves.active.map(&:quantity).sum)
    end

    def self.other_filter_sort(products, sort)
      Rails.logger.debug products = case sort
                                    when 'asc_name'
                                      products.sort_by(&:name)
                                    when 'desc_name'
                                      products.sort_by(&:name).reverse
                                    when 'desc_price'
                                      products.sort_by(&:price).reverse
                                    when 'asc_price'
                                      products.sort_by(&:price)
                                    else
                                      products
                                    end
      products
    end

    def store_name
      store&.name || business_name
    end

    def brand_name
      brand.name || business_name
    end

    def display_price
      discounted_price.presence || price
    end

    def self.default_image
      '/assets/default/product_default.png'
    end

    def set_identifier
      return if identifier.present?

      self.identifier = make_identifier_for(self)
    end

    def self.store_ids
      joins(user: :store).map { |product| product.store.id }.uniq
    end
  end
end
