class ApplicationController < ActionController::Base

    #helper_method :current_user
    
    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
        if session[:session_token] == user.session_token
            return true
        else
            return false
        end
    end

    def logout
        session[:session_token] = nil
        current_user.reset_session_token!
    end

end
