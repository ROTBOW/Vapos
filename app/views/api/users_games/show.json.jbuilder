

@user_games.each do |game|
    p game
    p '*' * 24
    # json.set! game['id'] do
    #     json.extract! game, :id, :title, :cost, :images_url, :owned
    # end
    json.extract! game
end