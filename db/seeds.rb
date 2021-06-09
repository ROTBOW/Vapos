# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

admin = User.create({username: 'admin', password: 'pinky', email: 'thisIsFakeBro@roads.com'})
demo = User.create({username: 'demo', password: 'demoboi55', email: 'thisIsFakeDemoboi@roads.com'})



# gonna need around 20-30 games in the final app, prob just gonna take them all from my list
Game.delete_all

from_the_depths = Game.create({
    title: 'From The Depths',
    description: 'voxel wartime vehicle builder',
    cost: 24.99,
    images_url: 'https://i.ibb.co/nwn1BVw/0-ftd.jpg<SEPA>https://i.ibb.co/m9kj5r0/1-ftd.jpg<SEPA>https://i.ibb.co/s90xJqg/2-ftd.jpg<SEPA>https://i.ibb.co/KKTz6zv/3-ftd.jpg<SEPA>https://i.ibb.co/72SrYLC/4-ftd.jpg<SEPA>https://i.ibb.co/tZJ0mVg/5-ftd.jpg'
    })

supcom_fa = Game.create({
    title: 'Supreme Commander Forged Alliance',
    description: 'Best RTS ever made',
    cost: 12.99,
    images_url: 'https://i.ibb.co/FWH8zsc/0-supcomfa.jpg<SEPA>https://i.ibb.co/sJdWVW6/1-supcomfa.jpg<SEPA>https://i.ibb.co/WF66TNm/2-supcomfa.jpg'
})
black_desert = Game.create({
    title: 'Black Desert Online',
    description: 'Massive MMORPG, countless things to do. plus, pretty graphics',
    cost: 9.99,
    images_url: 'https://i.ibb.co/Cz0vv8D/0-bdo.jpg<SEPA>https://i.ibb.co/nCGmxSS/1-bdo.jpg<SEPA>https://i.ibb.co/rstsmjM/2-bdo.jpg<SEPA>https://i.ibb.co/xFFczss/3-bdo.jpg<SEPA>https://i.ibb.co/jhRLrx8/4-bdo.jpg'
    
})
war_thunder = Game.create({
    title: 'War Thunder',
    description: 'War Thunder is the most comprehensive free-to-play, cross-platform, MMO military game dedicated to aviation, armoured vehicles, from the early 20th century to the most advanced modern combat units.',
    cost: 0,
    images_url: 'https://i.ibb.co/Ldnj2Lc/0-wt.jpg<SEPA>https://i.ibb.co/zPy8xhQ/1-wt.jpg<SEPA>https://i.ibb.co/Dz1PjvX/2-wt.jpg<SEPA>https://i.ibb.co/mGR79tK/3-wt.jpg<SEPA>https://i.ibb.co/Wvb02kR/4-wt.jpg'
})
x3_farnhams_legacy = Game.create({
    title: 'X3 Farnham\'s Legacy',
    description: 'The classic X3 game is brought back to life with this remaster of a masterpiece',
    cost: 0,
    images_url: 'https://i.ibb.co/D8hGqq1/0-x3fl.jpg<SEPA>https://i.ibb.co/1GW5fvJ/1-x3fl.jpg<SEPA>https://i.ibb.co/ckNMvSN/2-x3fl.jpg<SEPA>https://i.ibb.co/N73VNVP/3-x3fl.jpg<SEPA>https://i.ibb.co/FK8zpCW/4-x3fl.jpg'
})

UsersGame.delete_all

Game.all.each do |game|
    UsersGame.create!({
        user_id: admin.id,
        game_id: game.id,
        owned: true
    })
end

demo_game_1 = UsersGame.create!({
    user_id: demo.id,
    game_id: from_the_depths.id,
    owned: false
})
demo_game_2 = UsersGame.create({
    user_id: demo.id,
    game_id: war_thunder.id,
    owned: true
})
demo_game_3 = UsersGame.create({
    user_id: demo.id,
    game_id: black_desert.id,
    owned: true
})