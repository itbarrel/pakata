# frozen_string_literal: true

class Admin::Promotion < ApplicationRecord
  belongs_to :order
end
