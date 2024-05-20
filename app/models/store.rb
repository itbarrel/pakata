# == Schema Information
#
# Table name: stores
#
#  id                   :uuid             not null, primary key
#  contact_address      :string
#  contact_email        :string
#  currency             :string           default("USD"), not null
#  delivery_application :integer
#  facebook_link        :string
#  google_link          :string
#  name                 :string
#  pintrest_link        :string
#  twitter_link         :string
#  youtube_link         :string
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#
# Indexes
#
#  index_stores_on_name  (name)
#
class Store < ApplicationRecord
end
