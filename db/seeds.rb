# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

admin = User.new({username: 'admin', password: 'pinky', email: 'thisIsFakeBro@roads.com'})
admin.save!

demo = User.create({username: 'demo', password: 'demoboi55', email: 'thisIsFakeDemoboi@roads.com'})



# gonna need around 20-30 games in the final app, prob just gonna take them all from my list
Game.delete_all

from_the_depths = Game.create({
    title: 'From The Depths',
    description: 'voxel wartime vehicle builder',
    cost: 24.99,
    images_url: 'lol I have no idea how I\'m set images up'
    })

supcom_fa = Game.create({
    title: 'Supreme Commander Forged Alliance',
    description: 'Best RTS ever made',
    cost: 12.99,
    images_url: 'haha you thought'
})
black_desert = Game.create({
    title: 'Black Desert Online',
    description: 'Massive MMORPG, countless things to do. plus, pretty graphics',
    cost: 9.99,
    images_url: 'zipo, as in nothing'
})
war_thunder = Game.create({
    title: 'War Thunder',
    description: 'War Thunder is the most comprehensive free-to-play, cross-platform, MMO military game dedicated to aviation, armoured vehicles, from the early 20th century to the most advanced modern combat units.',
    cost: 0,
    images_url: 'got nothing for you'
})
x3_farnhams_legacy = Game.create({
    title: 'X3 Farnham\'s Legacy',
    description: 'The classic X3 game is brought back to life with this remaster of a masterpiece',
    cost: 0,
    images_url: 'hahahahahaha'
})

UsersGame.delete_all

Game.all.each do |game|
    UsersGame.create!({
        user_id: admin.id,
        game_id: game.id,
        owned: true
    })
end