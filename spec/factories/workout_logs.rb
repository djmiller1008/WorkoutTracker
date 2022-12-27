FactoryBot.define do
  factory :workout_log do
    user 
    workout 
    reps { 10 }
    weight { 100 }
    weight_unit { 'kg' }
    name { 'Bench Press' }
  end
end
