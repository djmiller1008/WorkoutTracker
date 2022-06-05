class WorkoutLog < ApplicationRecord
    belongs_to :workout, dependent: :destroy
    belongs_to :exercise
    belongs_to :user 

    

end