# frozen_string_literal: true

class CreateProPoints < ActiveRecord::Migration[7.0]
  def change
    create_table :pro_points, id: :uuid do |t|
      t.string :title
      t.string :description
      t.string :icon_class

      t.timestamps
    end
  end
end
