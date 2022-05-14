class Workout < ApplicationRecord
    validates :user_id, :date, presence: true

    belongs_to :user

    has_many :exercises
    

end
