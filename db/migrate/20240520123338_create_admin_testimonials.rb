# frozen_string_literal: true

class CreateAdminTestimonials < ActiveRecord::Migration[7.0]
  def change
    create_table :admin_testimonials, id: :uuid do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
