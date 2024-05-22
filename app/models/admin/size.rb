# frozen_string_literal: true

class Admin::Size < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :products

  accepts_nested_attributes_for :user
end
