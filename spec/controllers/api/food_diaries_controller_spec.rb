require 'rails_helper'

RSpec.describe Api::FoodDiariesController, type: :controller do
    render_views 
    describe 'GET #index' do 
        it 'returns limited number of food diaries as json' do 
            user = FactoryBot.create(:user)
            controller.stub(:current_user).and_return(user)
            FactoryBot.create_list(:food_diary, 5, user: user)

            get :index, params: { limit: 3 }, format: :json 
            body = JSON.parse(response.body) 
            expect(body.length).to eq(3)
        end 
    end 

    describe 'POST #create' do 
        before(:each) do
            @user = FactoryBot.create(:user) 
        end 

        context 'with valid params' do
            it 'creates a food diary and returns it as json' do 
                post :create, params: { food_diary: { user_id: @user.id ,
                                                        date: Date.new(2022, 11, 22)} },
                                                        format: :json 

                diary = FoodDiary.first 
                body = JSON.parse(response.body)
                expect(diary).to_not eq(nil)
                expect(body[diary.id.to_s]).to_not eq(nil)
                expect(body.length).to eq(1)
            end 
        end 

        context 'with invalid params' do 
            it 'does not create a food diary and returns an error message' do 
                post :create, params: { food_diary: { user_id: @user.id ,
                                                    date: ''} },
                                                    format: :json
                expect(response.status).to eq(401)

                message = JSON.parse(response.body)[0]
                expect(message).to eq('You must pick a valid date!')
            end
        end  
    end 

    describe 'GET #show' do 
        context 'with a valid food diary id' do 
            it 'returns the food diary as json' do 
                user = FactoryBot.create(:user)
                diary = FactoryBot.create(:food_diary, user: user)
                get :show, params: { id: diary.id }, format: :json 

                body = JSON.parse(response.body) 
                returned_id = body.values[0]['id']
                expect(returned_id).to eq(diary.id) 
            end 
        end
        
        context 'with an invalid food diary id' do 
            it 'returns an error message' do 
                get :show, params: { id: '' }, format: :json

                message = JSON.parse(response.body)[0]
                expect(response.status).to eq(401) 
                expect(message).to eq("This food diary doesn't exist!")
            end 
        end 

    end 

    describe 'DELETE #destroy' do
        it 'deletes a food diary from the database' do 
            user = FactoryBot.create(:user)
            diary = FactoryBot.create(:food_diary, user: user) 
            delete :destroy, params: { id: diary.id }, format: :json 
            deleted_diary = FoodDiary.find_by(id: diary.id)
            expect(deleted_diary).to eq(nil)
        end 
    end 

end
