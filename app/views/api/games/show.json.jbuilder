


json.set! @game.id do
    json.extract! @game, :id, :title, :cost, :description, :images_url
end