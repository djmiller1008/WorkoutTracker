class FoodDiary < ApplicationRecord
    has_many :food_logs
    belongs_to :user


end