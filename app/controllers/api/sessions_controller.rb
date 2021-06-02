class Api::SessionsController < ApplicationController

    def create
        p params
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if login(@user)
            render :create
        else
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
