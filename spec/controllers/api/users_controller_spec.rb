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
end


