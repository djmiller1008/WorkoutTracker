require 'rails_helper'

RSpec.describe FoodItem, type: :model do
  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:name) } 
  it { should validate_presence_of(:calories) }

  it { should belong_to(:user) }
end
