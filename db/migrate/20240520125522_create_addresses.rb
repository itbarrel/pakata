# frozen_string_literal: true

class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses, id: :uuid do |t|
      t.string    :address
      t.string    :country
      t.string    :country_state
      t.string    :city
      t.string    :address_type
      t.string    :phone_number
      t.string    :mobile_number

      t.references :orders
      t.references :customers

      t.timestamps
    end
  end
end
