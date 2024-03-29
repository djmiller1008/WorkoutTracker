require 'rails_helper'

RSpec.describe Exercise, type: :model do
    it { should validate_presence_of(:name) }
    it { should belong_to(:exercise_category) }

end
