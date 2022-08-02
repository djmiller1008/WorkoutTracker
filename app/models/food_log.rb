class FoodLog < ApplicationRecord
    belongs_to :user
    belongs_to :food_diary
    

end