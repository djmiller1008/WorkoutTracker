require 'rails_helper'

RSpec.describe Api::ExerciseCategoriesController, type: :controller do
    render_views
    describe 'GET #index' do
        it 'returns all categories as json' do
            FactoryBot.create_list(:exercise_category, 10)
            get :index, format: :json 
            body = JSON.parse(response.body)
            expect(body.length).to eq(10)
            expect(response.content_type).to eq('application/json')
        end
    end

    describe 'GET #show' do
        it 'returns all exercises for a given category' do
            category = FactoryBot.create(:exercise_category)
            FactoryBot.create_list(:exercise, 5, exercise_category: category)
            current_user = FactoryBot.create(:user)
            controller.stub(:current_user).and_return(current_user)
            FactoryBot.create_list(:user_exercise, 5, user: current_user, exercise_category: category)
            get :show, params: { id: category.name }, format: :json
            body = JSON.parse(response.body).to_a
            exercises = body[1][1]
            user_exercises = body[2][1]
            expect(exercises.length).to eq(5)
            expect(user_exercises.length).to eq(5)
        end
    end

end
