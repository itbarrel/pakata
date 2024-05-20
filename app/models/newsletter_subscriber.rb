# == Schema Information
#
# Table name: newsletter_subscribers
#
#  id         :uuid             not null, primary key
#  email      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class NewsletterSubscriber < ApplicationRecord
end
