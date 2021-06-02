class Api::UsersController < ApplicationController

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)

        if @user.save
            render :create
        else
            nil
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end

end
