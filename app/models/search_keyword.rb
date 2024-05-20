# == Schema Information
#
# Table name: search_keywords
#
#  id          :bigint           not null, primary key
#  IPaddress   :string
#  content     :string           not null
#  count       :integer          default(0), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  customer_id :integer
#
class SearchKeyword < ApplicationRecord
end
