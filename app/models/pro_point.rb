# frozen_string_literal: true

# == Schema Information
#
# Table name: pro_points
#
#  id          :uuid             not null, primary key
#  description :string
#  icon_class  :string
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class ProPoint < ApplicationRecord
end
