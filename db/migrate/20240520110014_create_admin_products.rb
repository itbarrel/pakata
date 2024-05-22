# frozen_string_literal: true

class CreateAdminProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :admin_products, id: :uuid do |t|
      t.string :identifier
      t.string        :name
      t.text          :description
      t.integer       :price
      t.integer       :discounted_price
      t.integer       :delivery, default: 0
      t.boolean       :featured, default: false
      t.boolean       :homepage, default: false
      t.string        :slug
      t.integer       :quantity, default: 0
      t.integer       :condition, default: 0
      t.boolean       :approved, default: false
      t.text          :key_points
      t.string         :video_url
      t.string         :pdf_url

      t.references :user
      t.references :brand

      t.timestamps
    end
  end
end
