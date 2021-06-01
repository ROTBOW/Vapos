class Api::UsersController < ApplicationController

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

end
