
game_imgs = @game.images_url.split('<SEPA>')


json.extract! @game, :id, :title, :cost, :description
json.images game_imgs