# == Schema Information
#
# Table name: reserves
#
#  id           :uuid             not null, primary key
#  active       :boolean          default(TRUE)
#  quantity     :integer          default(0)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  customer_id  :bigint
#  line_item_id :bigint
#  order_id     :bigint
#  product_id   :bigint
#  user_id      :bigint
#
# Indexes
#
#  index_reserves_on_customer_id   (customer_id)
#  index_reserves_on_line_item_id  (line_item_id)
#  index_reserves_on_order_id      (order_id)
#  index_reserves_on_product_id    (product_id)
#  index_reserves_on_user_id       (user_id)
#
class Reserf < ApplicationRecord
end
