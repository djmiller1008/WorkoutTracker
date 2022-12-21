class FoodItem < ApplicationRecord
    validates :user_id, presence: true
    validates :name, presence: true
    validates :calories, presence: true

    belongs_to :user
end