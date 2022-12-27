FactoryBot.define do
  factory :user_exercise do
    user 
    exercise_category
    name { "Pec Fly" }
  end
end
