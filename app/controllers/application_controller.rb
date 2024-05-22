# frozen_string_literal: true

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  before_action :general_initialization

  def general_initialization
    load_categories
    load_cart
    set_user_language
    set_header_configurations
    load_breadcrums
  end

  private

  def set_user_language
    @lang = session['language'].presence || :en
    I18n.locale = @lang
  end

  def load_cart
    @current_order = Order.find_by(number: session['order_number'])
  end

  def load_categories
    # byebug
    # @parent_categories = Admin::Category.roots || []
  end

  def load_breadcrums
    @breadcrums = [{ url: '/', text: 'Home' }]
  end

  def set_header_configurations
    header_types = {
      'narrow': ['white'],
      'wide': ['yellow']
    }
    @header_kind = header_types.keys.sample
    footer_types = %w[narrow wide]

    # pre info
    @header_type = "#{@header_kind}-#{header_types[@header_kind.to_sym].sample}"
    @footer_type = footer_types.sample

    # calculable
    @display_promotions = false

    @main_header_sticky = @product.blank?
    @product_info_header_sticky = @main_header_sticky.blank?

    @navigation_mobile_header = false
  end
end
