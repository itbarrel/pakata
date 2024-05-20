# == Schema Information
#
# Table name: admin_testimonials
#
#  id          :uuid             not null, primary key
#  description :text
#  name        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class AdminTestimonial < ApplicationRecord
end
