class SessionsController < ApplicationController

    def create
        user = User.find_by_credentials(username: params[:user][:username],
                                        password: params[:user][:password])    
        if user
            login!(user)
            redirect_to 'user#show'
        else
            render json: { message: 'Invalid Credentials' }, status: 401
        end
    end

    def destroy
        logout!
    end

end