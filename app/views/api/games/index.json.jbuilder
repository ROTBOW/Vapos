


@games.each do |game|
    json.set! game.id do
        json.extract! game, :id, :title, :description, :cost, :images_url
    end
end