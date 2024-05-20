# == Schema Information
#
# Table name: orders
#
#  id                   :uuid             not null, primary key
#  city                 :string
#  completed_at         :datetime
#  country              :string
#  country_state        :string
#  delivery_name        :string
#  email                :string
#  first_name           :string
#  guest_token          :string
#  last_name            :string
#  number               :string
#  payment_state        :string
#  payment_total        :decimal(10, 2)   default(0.0)
#  payment_type         :string
#  phone                :string
#  shipment_state       :string
#  special_instructions :text
#  state                :string
#  total                :decimal(10, 2)   default(0.0), not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#
class Order < ApplicationRecord
end
