# frozen_string_literal: true

class CreateAdminSizes < ActiveRecord::Migration[7.0]
  def change
    create_table :admin_sizes, id: :uuid do |t|
      t.string :name
      t.string :product_id

      t.references :users

      t.timestamps
    end
  end
end
