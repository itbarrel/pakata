# == Schema Information
#
# Table name: line_items
#
#  id          :uuid             not null, primary key
#  quantity    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  colors_id   :bigint
#  orders_id   :bigint
#  products_id :bigint
#  sizes_id    :bigint
#
# Indexes
#
#  index_line_items_on_colors_id    (colors_id)
#  index_line_items_on_orders_id    (orders_id)
#  index_line_items_on_products_id  (products_id)
#  index_line_items_on_sizes_id     (sizes_id)
#
class LineItem < ApplicationRecord
end
