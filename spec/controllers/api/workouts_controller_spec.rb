require 'rails_helper'

RSpec.describe Api::WorkoutsController, type: :controller do
    describe 'POST #create' do
        context 'with invalid params' do
            it 'validates the presence of user_id' do
                post :create, params: { workout: {user_id: nil} }
                expect(response).to have_http_status(401)
            end
        end

        context 'with valid params' do
            it 'returns json' do
                post :create, params: { workout: {user_id: 1, date: '11/11/2011'} }, format: :json
                expect(response.content_type).to eq("application/json")
            end
        end
    end

    describe 'GET #index' do
        it 'returns json' do
            @current_user = build(:user)
            controller.stub(:current_user).and_return(@current_user)
            get :index, format: :json
            expect(response.content_type).to eq("application/json")
        end
    end


end