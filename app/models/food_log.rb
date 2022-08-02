class FoodLog < ApplicationRecord
    validates :food_item_id, presence: true
    validates :user_id, presence: true
    validates :servings, presence: true
    validates :food_diary_id, presence: true
    

    belongs_to :user
    belongs_to :food_diary


end