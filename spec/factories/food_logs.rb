FactoryBot.define do
  factory :food_log do
    food_item
    user
    servings { 3 }
    food_diary
    name { "lunchbox" }
  end
end
