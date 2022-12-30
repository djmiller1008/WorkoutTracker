require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do
    render_views 
    describe 'POST #create' do 
        context 'with valid params' do
            it 'logs the user in and returns user info as json' do 
                user = FactoryBot.create(:user)
                post :create, params: { user: { email: user.email, password: user.password }},
                                        format: :json
                body = JSON.parse(response.body)
                expect(body['email']).to eq(user.email) 
                expect(user.session_token).to eq(session['session_token'])
            end 
        end 

        context 'with invalid params' do 
            it 'does not log the user in and returns an error message' do 
                post :create, params: { user: { email: 'bademail', password: 'badpass'}},
                                        format: :json

                message = JSON.parse(response.body)[0]
                expect(response.status).to eq(401)
                expect(message).to eq('Invalid Credentials')
                expect(session['session_token']).to eq(nil)
            end
        end
    end 

    describe 'DELETE #destroy' do 
        it 'logs out the user' do 
            user = FactoryBot.create(:user)
            post :create, params: { user: { email: user.email, password: user.password }},
                                        format: :json
            expect(user.session_token).to eq(session['session_token'])

            delete :destroy
            expect(user.session_token).to_not eq(session['session_token'])
            
            
        end
    end 

end
