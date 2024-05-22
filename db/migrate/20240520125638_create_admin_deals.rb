# frozen_string_literal: true

class CreateAdminDeals < ActiveRecord::Migration[7.0]
  def change
    create_table :admin_deals, id: :uuid do |t|
      t.datetime :expiry_time

      t.references :users

      t.timestamps
    end
  end
end
