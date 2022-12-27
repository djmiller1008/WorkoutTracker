require 'rails_helper'

RSpec.describe Api::WorkoutLogsController, type: :controller do
    render_views
    describe 'GET #index' do
        it 'returns all workout logs for a particular workout via json' do
            user = FactoryBot.create(:user)
            workout = FactoryBot.create(:workout, user: user)
            FactoryBot.create_list(:workout_log, 10, user: user, workout: workout)
            get :index, params: { workout_id: workout.id }, format: :json
            body = JSON.parse(response.body)
            expect(response.content_type).to eq('application/json')
            expect(body.length).to eq(10)
        end
    end

    describe 'POST #create' do
        context 'valid parameters with a normal exercise' do
            it 'creates a workout log and returns it as json' do
                exercise = FactoryBot.create(:exercise)
                user = FactoryBot.create(:user)
                workout = FactoryBot.create(:workout, user: user)
                post :create, params: { workout_id: workout.id, workout_log: {workout_id: workout.id,
                                                        reps: 10,
                                                        weight: 100,
                                                        weight_unit: 'kg',
                                                        user_id: user.id,
                                                        name: exercise.name}}, format: :json

                workout_log = WorkoutLog.first 
                expect(response.content_type).to eq('application/json')
                expect(workout_log).to_not eq(nil)
            end 
        end

        context 'valid parameters with a user-made exercise' do
            it 'creates a workout log and returns it as json' do 
                user = FactoryBot.create(:user)
                workout = FactoryBot.create(:workout, user: user)
                user_exercise = FactoryBot.create(:user_exercise, user: user)
                post :create, params: { workout_id: workout.id, workout_log: {workout_id: workout.id,
                                        reps: 10,
                                        weight: 100,
                                        weight_unit: 'kg',
                                        user_id: user.id,
                                        name: user_exercise.name}}, format: :json
                workout_log = WorkoutLog.first 
                expect(response.content_type).to eq('application/json')
                expect(workout_log).to_not eq(nil)
            end
        end

        context 'with invalid parameters' do
            it 'does not create a workout log and returns an error message' do
                exercise = FactoryBot.create(:exercise)
                workout = FactoryBot.create(:workout)
                post :create, params: { workout_id: workout.id, workout_log: {workout_id: workout.id,
                                            reps: 'bad argument',
                                            weight: 'hello',
                                            weight_unit: 'kg',
                                            user_id: nil,
                                            name: exercise.name}}, format: :json
                expect(response.status).to eq(401)
            end 
        end
    end
end
