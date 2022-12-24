FactoryBot.define do
  factory :food_diary do
    user
    date { Date.new(2022, 11, 22) }
  end
end
