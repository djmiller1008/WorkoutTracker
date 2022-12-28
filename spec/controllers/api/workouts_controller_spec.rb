require 'rails_helper'

RSpec.describe Api::WorkoutsController, type: :controller do
    render_views
    describe 'POST #create' do
        context 'with invalid params' do
            it 'validates the presence of user_id' do
                post :create, params: { workout: {user_id: nil} }
                expect(response).to have_http_status(401)
            end
        end

        context 'with valid params' do
            it 'returns json' do
                user = FactoryBot.create(:user)
                post :create, params: { workout: {user_id: user.id, date: "2022-11-22"} }, format: :json
                expect(response.content_type).to eq("application/json")
                expect(response.status).to eq(200)
                workout = Workout.find_by(user_id: user.id)
                expect(workout).to_not eq(nil)
            end
        end
    end

    describe 'GET #index' do
        it 'returns json' do
            current_user = build(:user)
            controller.stub(:current_user).and_return(current_user)
            get :index, format: :json
            expect(response.content_type).to eq("application/json")
        end
    end

    describe 'GET #show' do
        context 'with a valid workout id' do
            it 'returns workout as json' do
                workout = FactoryBot.create(:workout)
                get :show, params: {id: workout.id}, format: :json
                expect(response.status).to eq(200)
                body = JSON.parse(response.body)
                expect(body[workout.id.to_s]["date"]).to eq("11/22/2022")
            end
        end

        context 'with an invalid workout id' do
            it 'returns an error message' do
                get :show, params: {id: 'bad_id'}, format: :json
                message = JSON.parse(response.body)[0]
                expect(response.status).to eq(401)
                expect(message).to eq("This workout doesn't exist!")
            end
        end
    end

    describe 'DELETE #destroy' do
        it 'deletes the workout from the database' do
            workout = FactoryBot.create(:workout)
            current_user = workout.user 
            controller.stub(:current_user).and_return(current_user)
            delete :destroy, params: {id: workout.id}, format: :json
            workout = Workout.find_by(id: workout.id)
            expect(workout).to eq(nil)
        end
    end
end