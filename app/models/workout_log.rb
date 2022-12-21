class WorkoutLog < ApplicationRecord
    validates :workout_id, presence: true
    validates :user_id, presence: true 
    validates :name, presence: true 

    belongs_to :workout, dependent: :destroy
    belongs_to :user 

end