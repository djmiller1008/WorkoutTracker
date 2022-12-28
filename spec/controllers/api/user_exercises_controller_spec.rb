require 'rails_helper'

RSpec.describe Api::UserExercisesController, type: :controller do
    render_views 
    describe 'GET #index' do
        it 'returns all user exercises as json' do
            current_user = FactoryBot.create(:user)
            category = FactoryBot.create(:exercise_category)
            FactoryBot.create_list(:user_exercise, 10, user: current_user, exercise_category: category)
            controller.stub(:current_user).and_return(current_user)
            get :index, format: :json 
            body = JSON.parse(response.body)
            expect(body.length).to eq(10)
        end
    end

    describe 'POST #create' do
        before(:each) do
            @user = FactoryBot.create(:user)
            @category = FactoryBot.create(:exercise_category)
        end

        context 'with valid params' do
            it 'creates a user exercise and returns it as json' do
                post :create, params: { user_exercise: {name: 'New User Exercise',
                                                         user_id: @user.id,
                                                         exercise_category_id: @category.id}},
                                                         format: :json 
                body = JSON.parse(response.body)
                user_exercise = UserExercise.find_by(name: 'New User Exercise')
                expect(body['name']).to eq('New User Exercise')
                expect(user_exercise).to_not eq(nil)
            end
        end

        context 'with invalid params' do
            it 'does not save a user exercise and returns an error' do
                post :create, params: { user_exercise: {name: '',
                                                        user_id: @user.id,
                                                        exercise_category_id: @category.id}},
                                                        format: :json 
                error = JSON.parse(response.body)[0]
                user_exercise = UserExercise.find_by(user: @user)
                expect(error).to eq('Invalid Entry')
                expect(user_exercise).to eq(nil)
            end
        end
    end

    describe 'DELETE #destroy' do 
        it 'deletes a user exercise with a given id and returns the rest as json' do
            current_user = FactoryBot.create(:user)
            controller.stub(:current_user).and_return(current_user)
            category = FactoryBot.create(:exercise_category)
            user_exercise1 = FactoryBot.create(:user_exercise, user: current_user, exercise_category: category)
            user_exercise2 = FactoryBot.create(:user_exercise, user: current_user, exercise_category: category)

            delete :destroy, params: { id: user_exercise1.id }, format: :json
            body = JSON.parse(response.body)
            deleted_exercise = UserExercise.find_by(id: user_exercise1.id)
            expect(deleted_exercise).to eq(nil)
            expect(body.length).to eq(1)
        end
    end

end
