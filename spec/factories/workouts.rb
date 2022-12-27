FactoryBot.define do
    factory :workout do
      user 
      date { Date.new(2022, 11, 22) }
    end
  end