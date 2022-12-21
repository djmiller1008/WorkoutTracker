class ExerciseCategory < ApplicationRecord
    validates :name, presence: true, length: {minimum: 1}
    
    has_many :exercises

end