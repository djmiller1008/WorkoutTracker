class FoodLog < ApplicationRecord
    validates :food_item_id, presence: true
    validates :user_id, presence: true
    validates :servings, presence: true
    validates :food_diary_id, presence: true
    validates :name, presence: true
    

    belongs_to :user
    belongs_to :food_diary
    belongs_to :food_item

    def self.find_nutrient_totals(food_logs)
        nutrient_info = {
            calories: 0,
            fat: 0,
            carbohydrates: 0,
            protein: 0
        }

        food_logs.each do |food_log|
            nutrient_info[:calories] += (food_log.food_item.calories * food_log.servings)
            nutrient_info[:protein] += (food_log.food_item.protein * food_log.servings)
            nutrient_info[:carbohydrates] += (food_log.food_item.carbohydrates * food_log.servings)
            nutrient_info[:fat] += (food_log.food_item.fat * food_log.servings)
        end
        nutrient_info
    end

end