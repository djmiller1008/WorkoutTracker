class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def login!(user)
        session[:session_token] = user.session_token
    end

    def logout!
        session[:session_token] = nil
        user.reset_session_token!
    end

    def current_user
        @current_user = User.find_by(session_token: session[:session_token])
        return @current_user
    end

    def logged_in?
        current_user != nil
    end



end
