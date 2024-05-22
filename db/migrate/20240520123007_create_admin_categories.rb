# frozen_string_literal: true

class CreateAdminCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :admin_categories, id: :uuid do |t|
      t.string :name
      t.string :slug
      t.string :ancestry

      t.timestamps
    end

    add_index :admin_categories, :ancestry
  end
end
