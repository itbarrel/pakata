# == Schema Information
#
# Table name: admin_products
#
#  id               :uuid             not null, primary key
#  approved         :boolean          default(FALSE)
#  condition        :integer          default(0)
#  delivery         :integer          default(0)
#  description      :text
#  discounted_price :integer
#  featured         :boolean          default(FALSE)
#  homepage         :boolean          default(FALSE)
#  identifier       :string
#  key_points       :text
#  name             :string
#  pdf_url          :string
#  price            :integer
#  quantity         :integer          default(0)
#  slug             :string
#  video_url        :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  brand_id         :bigint
#
# Indexes
#
#  index_admin_products_on_brand_id  (brand_id)
#
class AdminProduct < ApplicationRecord
end
