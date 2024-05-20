# == Schema Information
#
# Table name: reviews
#
#  id          :uuid             not null, primary key
#  comment     :string
#  rate        :integer
#  customer_id :bigint
#  product_id  :bigint
#
# Indexes
#
#  index_reviews_on_customer_id  (customer_id)
#  index_reviews_on_product_id   (product_id)
#
class Review < ApplicationRecord
end
