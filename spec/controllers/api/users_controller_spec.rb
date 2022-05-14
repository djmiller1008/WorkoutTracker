require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
    describe 'POST #create' do
        context 'with invalid params' do
            it 'validates the presence of username and password' do
                post :create, params: { user: {username: '', password: ''} }
                expect(response).to have_http_status(401)
            end
        end

        context 'with valid params' do
            it 'returns json' do
                post :create, params: { user: {username: 'Dave', password: '123456'} }, format: :json
                expect(response.content_type).to eq("application/json")
            end
        end
    end
end


