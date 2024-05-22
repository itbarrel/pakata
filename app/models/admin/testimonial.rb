# frozen_string_literal: true

class Admin::Testimonial < ApplicationRecord
  has_one :image, as: :imageable, dependent: :destroy

  accepts_nested_attributes_for :image, reject_if: proc { |attributes| attributes['avatar'].nil? }
end
