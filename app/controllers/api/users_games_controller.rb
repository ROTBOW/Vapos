class Api::UsersGamesController < ApplicationController

    def show
        user = User.find_by(id: params[:id])
        @user_games = user.games_with_status
        render json: @user_games
    end
    
    def create
        @relation = UsersGame.new(usersgames_params)
        if @relation.save
            game = Game.find_by(id: @relation['game_id']).as_json
            game['owned'] = @relation['owned']
            game['relation_id'] = @relation['id']
            game['images'] = game['images_url'].split('<SEPA>')
            game.delete('image_url')
            render json: game
        else
            render json: @relation.errors.full_messages, status: 401
        end
    end

    def destroy
        relation = UsersGame.find_by(id: params[:id])
        relation.destroy
    end

    private
    def usersgames_params
        params.require(:relation).permit(:user_id, :game_id, :owned)
    end
end
