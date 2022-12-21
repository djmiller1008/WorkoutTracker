class Exercise < ApplicationRecord
    validates :name, presence: true
    belongs_to :exercise_category

end