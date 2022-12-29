require 'rails_helper'

RSpec.describe Api::FoodItemsController, type: :controller do
    render_views
 
    describe 'GET #index' do
        it 'returns all the current users food items as json' do
            current_user = FactoryBot.create(:user)
            controller.stub(:current_user).and_return(current_user)
            FactoryBot.create_list(:food_item, 10, user: current_user)

            get :index, format: :json 
            expect(response.content_type).to eq('application/json')

            body = JSON.parse(response.body) 
            expect(body.length).to eq(10) 
        end
    end

    describe 'POST #create' do 
        before(:each) do 
            @current_user = FactoryBot.create(:user)
        end 
        context 'with valid params' do
            it 'saves a food item and returns all the current users food items as json' do
                controller.stub(:current_user).and_return(@current_user)
                FactoryBot.create_list(:food_item, 5, user: @current_user)

                post :create, params: { food_item: { user_id: @current_user.id,
                                                    name: 'Apple',
                                                    calories: 90,
                                                    fat: 0,
                                                    protein: 1,
                                                    carbohydrates: 22 }},
                                                    format: :json 

                expect(response.content_type).to eq('application/json')

                body = JSON.parse(response.body) 
                expect(body.length).to eq(6)
            end
        end 

        context 'with invalid params' do
            it 'does not save a food item and returns an error message' do 
                post :create, params: { food_item: { user_id: @current_user.id,
                                                    name: 'Apple',
                                                    calories: '',
                                                    fat: 0,
                                                    protein: 1,
                                                    carbohydrates: 22 }},
                                                    format: :json 
                expect(response.status).to eq(401)
                message = JSON.parse(response.body)[0]
                expect(message).to eq('Invalid Entry')
            end
        end  
    end

    describe 'GET #show' do 
        it 'returns a specific food item as json' do 
            user = FactoryBot.create(:user)
            food_item = FactoryBot.create(:food_item, user: user)

            get :show, params: { id: food_item.id }, format: :json 
            body = JSON.parse(response.body)
            expect(body['name']).to eq(food_item.name)
            expect(body['id']).to eq(food_item.id) 
        end 
    end 

    describe 'DELETE #destroy' do 
        it 'deletes a food item from the database and returns all other user food items' do 
            current_user = FactoryBot.create(:user)
            controller.stub(:current_user).and_return(current_user)
            FactoryBot.create_list(:food_item, 3, user: current_user)
            food_item = FactoryBot.create(:food_item, user: current_user)

            delete :destroy, params: { id: food_item.id }, format: :json 

            deleted_food_item = FoodItem.find_by(id: food_item.id)
            expect(deleted_food_item).to eq(nil)

            body = JSON.parse(response.body)
            expect(body.length).to eq(3)
        end 
    end 
end
