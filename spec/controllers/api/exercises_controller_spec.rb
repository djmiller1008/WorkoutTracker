require 'rails_helper'

RSpec.describe Api::ExercisesController, type: :controller do
    render_views

    describe 'POST #create' do
        before(:each) do
            @category = FactoryBot.create(:exercise_category)
        end

        context 'with valid params' do
            it 'creates an exercise and returns a success message' do
                post :create, params: { exercise: {name: 'New Exercise', 
                                                    exercise_category_id: @category.id} },
                                                    format: :json
                message = JSON.parse(response.body)[0]
                exercise = Exercise.find_by(name: 'New Exercise')
                
                expect(message).to eq("Exercise saved")
                expect(exercise).to_not eq(nil)
            end
        end

        context 'with no name parameter' do
            it 'does not create an exercise and returns an error message' do
                post :create, params: { exercise: {name: '',
                                                    exercise_category_id: @category.id }},
                                                    format: :json 
                expect(response.status).to eq(401)
                
                message = JSON.parse(response.body)[0]
                expect(message).to eq("Name can't be blank")
            end
        end 

        context 'with no exercise category id' do
            it 'does not create an exercise and returns an error message' do
                post :create, params: { exercise: {name: 'New Exercise'}}, format: :json 
                expect(response.status).to eq(401)
                
                message = JSON.parse(response.body)[0]
                expect(message).to eq("Exercise category must exist")
            end 
        end

    end

    describe 'GET #index' do 
        it 'returns exercises and current users exercises as json' do 
            current_user = FactoryBot.create(:user)
            controller.stub(:current_user).and_return(current_user)
            category = FactoryBot.create(:exercise_category)
            FactoryBot.create(:exercise, exercise_category: category)
            FactoryBot.create(:user_exercise, user: current_user, exercise_category: category)

            get :index, format: :json
            expect(response.content_type).to eq('application/json')

            body = JSON.parse(response.body)
            expect(body.length).to eq(2)
        end
    end

end
