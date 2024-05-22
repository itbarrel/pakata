# frozen_string_literal: true

class CreateNewsletterSubscribers < ActiveRecord::Migration[7.0]
  def change
    create_table :newsletter_subscribers, id: :uuid do |t|
      t.string :email

      t.timestamps
    end
  end
end
