# frozen_string_literal: true

class CreateSearchKeywords < ActiveRecord::Migration[7.0]
  def change
    create_table :search_keywords do |t|
      t.string :content, null: false
      t.integer :count, null: false, default: 0
      t.integer :customer_id
      t.string :IPaddress

      t.timestamps
    end
  end
end
