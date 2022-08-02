class FoodItem < ApplicationRecord
    validates :user_id, presence: true
    validates :name, presence: true
    validates :calores, presence: true

    belongs_to :user



end