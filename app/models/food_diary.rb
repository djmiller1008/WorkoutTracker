class FoodDiary < ApplicationRecord
    validates :user_id, presence: true
    validates :date, presence: true

    has_many :food_logs
    belongs_to :user

end