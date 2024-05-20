class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews, id: :uuid do |t|
      t.string :comment
      t.integer :rate

      t.references :product
      t.references :customer
    end
  end
end
