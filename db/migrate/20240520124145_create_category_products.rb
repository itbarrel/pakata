class CreateCategoryProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :admin_categories_products, id: :uuid do |t|

    	t.references :category
    	t.references :product
    end
  end
end
