require 'rails_helper'

RSpec.describe WorkoutLog, type: :model do
  it { should validate_presence_of(:workout_id) }
  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:name) }

  it { should belong_to(:workout) }
  it { should belong_to(:user) }
  
end
