require 'rails_helper'

RSpec.describe ExerciseCategory, type: :model do
  it { should validate_presence_of(:name) }

  it { should have_many(:exercises) }
end
