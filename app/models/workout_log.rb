class WorkoutLog < ApplicationRecord
    belongs_to :workout
    belongs_to :exercise
    belongs_to :user 

    

end