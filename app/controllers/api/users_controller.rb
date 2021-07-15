class Api::UsersController < ApplicationController

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render :create
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def games
        user = User.find_by(id: params[:id])
        @games = user.games_with_status
        render json: @games
    end

    def search
        users = User.all
        response = {}
        users.each do |user|
            if user.username.downcase.include?(params[:search].downcase)
                response[user.id] = [user.id, user.username]
            end
        end
        render json: response.to_json
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end

end
