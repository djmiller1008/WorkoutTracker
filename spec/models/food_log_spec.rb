require 'rails_helper'

RSpec.describe FoodLog, type: :model do
  it { should validate_presence_of(:food_item_id) }
  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:servings) }
  it { should validate_presence_of(:food_diary_id) }
  it { should validate_presence_of(:name) }

  it { should belong_to(:user) }
  it { should belong_to(:food_diary) }
  it { should belong_to(:food_item) }
end
