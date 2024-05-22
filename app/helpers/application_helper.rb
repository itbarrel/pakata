# frozen_string_literal: true

module ApplicationHelper
  def toastr_flash
    flash.each_with_object([]) do |(type, message), flash_messages|
      type = 'success' if type == 'notice'
      type = 'error' if type == 'alert'
      text = "<script>toastr.#{type}('#{message}', '', { closeButton: true, progressBar: true })</script>"
      flash_messages << text.html_safe if message
    end.join("\n").html_safe
  end

  def currency_codes
    currencies = []
    Money::Currency.table.each_value do |currency|
      currencies += [["#{currency[:name]} (#{currency[:iso_code]})", currency[:iso_code]]]
    end
    currencies
  end

  def store_unit
    unit = Store.first.currency || 'Pkr'
    Money::Currency.new(unit).symbol
  end

  def show_price(price)
    unit = Store.first.currency || 'Pkr'
    money = Money.new(price * 100, unit)
    money.format(symbol: "#{money.symbol} ", no_cents_if_whole: true)
  rescue StandardError
    0
  end

  def make_identifier_for(_obj)
    "PR-#{(0...10).map { rand(65..90).chr }.join}"
  end

  def get_social_link(attr_name)
    link = "Store.last.#{attr_name}" || ''
    eval(link)
  end

  def business_name
    ENV['PROJECT_NAME'] || 'PAKATA'
  end

  def business_email
    ENV['PROJECT_EMAIL'] || 'pakata@gmail.com'
  end

  def business_mobile_text
    ENV['PROJECT_MOBILE_PHONE_TEXT'] || 'Hotline:'
  end

  def business_mobile_number
    number = ENV['PROJECT_MOBILE_PHONE_NUMBER'] || '+923350477406'
    "#{number[0..2]}-#{number[3..5]}-#{number[6..8]}-#{number[9..10]}-#{number[11..12]}"
  end

  def whatsapp_mobile_number
    ENV['PROJECT_MOBILE_PHONE_NUMBER'] || '+923350477406'
  end

  def business_office_text
    ENV['PROJECT_OFFICE_PHONE_TEXT'] || 'Hotline:'
  end

  def business_office_number
    number = ENV['PROJECT_OFFICE_PHONE_NUMBER'] || '+923350477406'
    "#{number[0..2]}-#{number[3..5]}-#{number[6..8]}-#{number[9..10]}-#{number[11..12]}"
  end

  def whatsapp_office_number
    ENV['PROJECT_OFFICE_PHONE_NUMBER'] || '+923350477406'
  end

  def business_address
    ENV['PROJECT_ADDRESS'] || 'Shalimar town Lahore'
  end

  def logo_location_path
    ENV['LOGO_LOCATION'] || '/assets/logo.png'
  end
end
