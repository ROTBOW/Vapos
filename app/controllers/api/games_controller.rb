class Api::GamesController < ApplicationController


    def index
        @games = Game.all
        render :index
    end

    def show
        @game = Game.find_by(id: params[:id])
        render :show
    end

    def images
        images_loca = "./../assests/images/games/#{params[:images_url]}"
        unsorted_names = Dir.entries("./app/assets/images/games/#{params[:images_url]}")

        returned_names = []
        unsorted_names.each do |file|
            unless file.nil?
                returned_names << file if file.end_with?('.jpg', '.png')
            end
        end


        @info = {
            game: params[:images_url],
            image_names: returned_names.sort,
            image_count: returned_names.size
        }
        
        
        render :images
    end

end
