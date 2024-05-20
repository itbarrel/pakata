class CreateLineItems < ActiveRecord::Migration[7.0]
  def change
    create_table :line_items, id: :uuid do |t|
    	t.integer :quantity

    	t.references  :products
    	t.references  :orders
    	t.references  :sizes
    	t.references  :colors
    	
      t.timestamps 
    end
  end
end
