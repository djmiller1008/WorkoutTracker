class UserExercise < ApplicationRecord
    validates :name, presence: true
    validates :user_id, presence: true
    validates :exercise_category_id, presence: true

    belongs_to :user
    belongs_to :exercise_category
end