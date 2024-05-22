# frozen_string_literal: true

class Admin::Deal < ApplicationRecord
  belongs_to :product, class_name: 'Admin::Product'
end
