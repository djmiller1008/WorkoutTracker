FactoryBot.define do
  factory :food_item do
    user
    name { "lunchbox" }
    calories { 550 }
    fat { 18 }
    protein { 25 }
    carbohydrates { 44}
  end
end
