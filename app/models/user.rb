# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                     :uuid             not null, primary key
#  current_sign_in_at     :datetime
#  current_sign_in_ip     :string
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  last_sign_in_at        :datetime
#  last_sign_in_ip        :string
#  lat                    :float
#  lng                    :float
#  location               :string
#  name                   :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  sign_in_count          :integer          default(0), not null
#  slug                   :string
#  verified               :boolean          default(FALSE)
#  store_id               :bigint
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_slug                  (slug) UNIQUE
#  index_users_on_store_id              (store_id)
#
class User < ApplicationRecord
  rolify
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  belongs_to :store
  has_many :line_items, dependent: :destroy
  has_many :reserves, class_name: 'Reserve', dependent: :destroy
  has_many :products, class_name: 'Admin::Product', dependent: :destroy
  has_many :sizes, class_name: 'Admin::Size', dependent: :destroy
  has_many :colors, class_name: 'Admin::Color', dependent: :destroy
  # has_many :categories, class_name: "Admin::Category"

  has_one_attached :avatar

  geocoded_by :full_street_address, latitude: :lat, longitude: :lng
  reverse_geocoded_by :latitude, :longitude

  after_validation :geocode, if: ->(obj) { obj.location.present? && obj.location_changed? }
  after_validation :reverse_geocode

  after_save :validate_or_create_store

  def validate_or_create_store
    return if store.present?

    build_store(name: name).save!
    save!
  end

  def full_street_address
    # convert address to geocoded values
    location.to_s
  end

  def clearance_levels
    # Array of role names
    roles.pluck(:name)
  end

  def superadmin?
    self && has_role?(:superadmin)
  end
end
