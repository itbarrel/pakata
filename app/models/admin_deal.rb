# frozen_string_literal: true

# == Schema Information
#
# Table name: admin_deals
#
#  id          :uuid             not null, primary key
#  expiry_time :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  users_id    :bigint
#
# Indexes
#
#  index_admin_deals_on_users_id  (users_id)
#
class AdminDeal < ApplicationRecord
end
