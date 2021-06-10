class Api::CartItemsController < ApplicationController

    def show
        items = User.find_by(id: params[:id]).cart_with_relation
        
        render json: items.as_json
    end

    def create
        relation = CartItem.new(cart_params)
        if relation.save!
            game = Game.find_by(id: relation['game_id']).as_json
            game['relation_id'] = relation['id']
            render json: game
        end
    end

    def destroy
        relation = CartItem.find_by(id: params[:id])
        relation.destroy
    end


    private
    def cart_params
        params.require(:relation).permit(:user_id, :game_id)
    end
end
