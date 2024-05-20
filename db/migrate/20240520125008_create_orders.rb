class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders, id: :uuid do |t|
      t.string      :number
      t.decimal     :total,                             precision: 10, scale: 2, default: 0.0,     null: false
      t.string      :state
      t.datetime    :completed_at
      t.decimal     :payment_total,                     precision: 10, scale: 2, default: 0.0
      t.string      :shipment_state
      t.string      :payment_state
      t.string      :email
      t.text        :special_instructions
      t.string      :phone
      t.string      :first_name
      t.string      :last_name
      t.string      :delivery_name
      t.string      :country
      t.string      :country_state
      t.string      :city
      t.string      :payment_type
      t.string      :guest_token

      t.timestamps null: false
    end
  end
end
