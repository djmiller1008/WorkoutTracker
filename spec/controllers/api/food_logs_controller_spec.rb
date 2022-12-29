require 'rails_helper'

RSpec.describe Api::FoodLogsController, type: :controller do
    render_views 
    before(:each) do
        @user = FactoryBot.create(:user)
        @food_item = FactoryBot.create(:food_item, user: @user)
        @diary = FactoryBot.create(:food_diary, user: @user)
    end
    describe 'POST #create' do 
        context 'with valid params' do
            it 'saves a food log and returns all food logs from the food diary as json' do
                post :create, params: { food_log: { food_item_id: @food_item.id,
                                                    user_id: @user.id,
                                                    servings: 2,
                                                    food_diary_id: @diary.id,
                                                    name: 'lunchbox' } },
                                                    format: :json 
                log = FoodLog.first 
                body = JSON.parse(response.body)
                
                expect(log).to_not eq(nil)
                expect(body[log.id.to_s]).to_not eq(nil)
                expect(body["nutrient_info"]).to_not eq(nil)
            end
        end 

        context 'with invalid params, no food item name' do
            it 'does not save a food item and returns an error message' do
                post :create, params: { food_log: { food_item_id: @food_item.id,
                                                    user_id: @user.id,
                                                    servings: 2,
                                                    food_diary_id: @diary.id,
                                                    name: '' } },
                                                    format: :json 
                message = JSON.parse(response.body)[0]
                expect(response.status).to eq(401)
                expect(message).to eq('Please pick a food item')
            end
        end

        context 'with invalid params, no servings entered' do
            it 'does not save a food item and returns an error message' do
                post :create, params: { food_log: { food_item_id: @food_item.id,
                                                    user_id: @user.id,
                                                    servings: '',
                                                    food_diary_id: @diary.id,
                                                    name: 'lunchbox' } },
                                                    format: :json 
                message = JSON.parse(response.body)[0]
                expect(response.status).to eq(401)
                expect(message).to eq('Please enter the number of servings')
            end
        end

        context 'with other invalid params' do
            it 'does not save a food item and returns an error message' do
                post :create, params: { food_log: { food_item_id: @food_item.id,
                                                    user_id: @user.id,
                                                    servings: 2,
                                                    food_diary_id: '',
                                                    name: 'lunchbox' } },
                                                    format: :json 
                message = JSON.parse(response.body)[0]
                expect(response.status).to eq(401)
                expect(message).to_not eq(nil)
            end
        end  

    end 

    describe 'GET #index' do
        it 'returns all food logs from a food diary and nutrient totals as json' do
            controller.stub(:current_user).and_return(@user)
            FactoryBot.create_list(:food_log, 10, user: @user, 
                                    food_item: @food_item,
                                    food_diary: @diary)
            
            get :index, params: { food_diary_id: @diary.id }, format: :json 
            body = JSON.parse(response.body)
            expect(body['nutrient_info']).to_not eq(nil)
            expect(body.length).to eq(11)
        end
    end 

end
