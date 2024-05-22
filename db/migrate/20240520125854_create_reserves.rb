# frozen_string_literal: true

class CreateReserves < ActiveRecord::Migration[7.0]
  def change
    create_table :reserves, id: :uuid do |t|
      t.integer :quantity, default: 0
      t.boolean :active, default: true

      t.references :product
      t.references :line_item
      t.references :order
      t.references :user
      t.references :customer

      t.timestamps
    end
  end
end
