class CreateStores < ActiveRecord::Migration[7.0]
  def change
    create_table :stores, id: :uuid do |t|
      t.string  :name, index: true
    	t.string  :currency, default: 'USD', null: false
      t.integer :delivery_application

      t.string :facebook_link
      t.string :twitter_link
      t.string :pintrest_link
      t.string :google_link
      t.string :youtube_link
      t.string :contact_email
      t.string :contact_address

      t.timestamps
    end
  end
end
