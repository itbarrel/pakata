# == Schema Information
#
# Table name: addresses
#
#  id            :uuid             not null, primary key
#  address       :string
#  address_type  :string
#  city          :string
#  country       :string
#  country_state :string
#  mobile_number :string
#  phone_number  :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  customers_id  :bigint
#  orders_id     :bigint
#
# Indexes
#
#  index_addresses_on_customers_id  (customers_id)
#  index_addresses_on_orders_id     (orders_id)
#
class Address < ApplicationRecord
end
