# frozen_string_literal: true

# == Schema Information
#
# Table name: admin_categories
#
#  id         :uuid             not null, primary key
#  ancestry   :string
#  name       :string
#  slug       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_admin_categories_on_ancestry  (ancestry)
#
class AdminCategory < ApplicationRecord
end
