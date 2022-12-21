require 'rails_helper'

RSpec.describe FoodDiary, type: :model do
  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:date) }

  it { should have_many(:food_logs) }
  it { should belong_to(:user) }
  
end
