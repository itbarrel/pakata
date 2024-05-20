# == Schema Information
#
# Table name: admin_sizes
#
#  id         :uuid             not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  product_id :string
#  users_id   :bigint
#
# Indexes
#
#  index_admin_sizes_on_users_id  (users_id)
#
class AdminSize < ApplicationRecord
end
