class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login(@user)
            render :create
        else
            render json: [['invalid username or password']], status: 401
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
