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

  describe 'find_nutrient_totals' do 
    it 'calculates and returns nutrient totals of given food logs' do
      food_logs = FactoryBot.build_list(:food_log, 10)
     
      result = FoodLog.find_nutrient_totals(food_logs)
      expect(result).to eq({:calories=>16500, :fat=>540, :carbohydrates=>1320, :protein=>750})
    end
  end
end
