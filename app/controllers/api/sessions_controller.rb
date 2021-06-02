class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if login(@user)
            render :create
        else
            render :create
        end
    end


    def destroy
        # @user = User.find_by(session_token: session[:session_token])
        logout()
        if !logged_in?
            @messages = ['You\'ve been logged out!']
            render :destroy
        else
            @messages = ['was unable to log out']
            render :destroy
        end

    end

    
end
