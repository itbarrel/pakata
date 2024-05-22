# frozen_string_literal: true

class Admin < ApplicationRecord
  def self.table_name_prefix
    'admin_'
  end
end
