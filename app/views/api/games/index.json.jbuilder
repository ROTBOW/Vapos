


@games.each do |game|
    game_imgs = game.images_url.split('<SEPA>')
    json.set! game.id do
        json.extract! game, :id, :title, :description, :cost
        json.images game_imgs
    end
end