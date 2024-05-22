# frozen_string_literal: true

# == Schema Information
#
# Table name: admin_colors
#
#  id         :uuid             not null, primary key
#  name       :string
#  value      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  users_id   :bigint
#
# Indexes
#
#  index_admin_colors_on_users_id  (users_id)
#
class AdminColor < ApplicationRecord
end
