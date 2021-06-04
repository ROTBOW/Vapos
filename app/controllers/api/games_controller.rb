class Api::GamesController < ApplicationController

    def index
        @games = Game.all
        render :index
    end

    def show
        @game = Game.find_by(id: params[:id])
        render :show
    end

end
