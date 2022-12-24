require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
    describe 'POST #create' do
        context 'with invalid params' do
            it 'validates the presence of username and password' do
                post :create, params: { user: {email: '', password: ''} }
                expect(response).to have_http_status(401)
            end
        end

        context 'with valid params' do
            it 'redirects to show' do
                post :create, params: { user: {email: 'd@d.com', password: 'password'} }, format: :json
                expect(response).to render_template(:show)
            end
        end
    end

    describe 'PUT #update' do
        context 'as a normal user' do
            it 'correctly updates the users email' do
                @current_user = User.find_by(email: 'david@david.com')
                controller.stub(:current_user).and_return(@current_user)
                put :update, params: { id: @current_user.id, data: {email: 'bob@bob.com'} }, format: :json
                expect(User.find_by(email: 'bob@bob.com')).to_not eq(nil)
                expect(User.find_by(email: 'david@david.com')).to eq(nil)
            end
        end 

        context 'as an admin/demo' do
            it 'does not update the email, renders an error message' do
                @current_user = User.create(email: 'admin@admin.com', password: 'password')
                controller.stub(:current_user).and_return(@current_user)
                response = put :update, params: { id: @current_user.id, data: {email: 'bob@bob.com'} }, format: :json
                expect(response.status).to eq(401)
                expect(response.body).to eq("[\"Unauthorized to change admin email\"]")
            end
        end

        context 'with an invalid id' do
            it 'returns an error' do 
                @current_user = FactoryBot.build(:user)
                controller.stub(:current_user).and_return(@current_user)
                response = put :update, params: { id: 999, data: {email: 'm@m.com'} }, format: :json
                expect(response.status).to eq(401)
                expect(response.body).to eq("[\"User not found\"]")
            end
        end
    end
end


