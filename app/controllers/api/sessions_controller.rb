class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if login(@user)
            @messages = ['Log in successful']
            render :create
        else
            @messages = ['Could not log in']
            render :create
        end
    end


    def destroy
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
