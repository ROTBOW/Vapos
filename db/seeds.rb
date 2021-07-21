# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

admin = User.create({username: 'admin', password: 'pinky', email: 'thisIsFakeBro@roads.com', desc: 'Has Admin name, not much else'})
demo = User.create({username: 'Demo User', password: 'demoboi55', email: 'thisIsFakeDemoboi@roads.com', desc: "Wow this site is so cool! I can't wait to see all the games I can buy!"})

maddog = User.create({
    username: 'MadDog',
    password: 'MadDog55',
    email: 'maddog@mail.com',
    desc: 'hey yo mate, ain\'t none of you wanna fight me 1v1'
})

angelica = User.create({
    username: 'Angelica',
    password: 'Angelica55',
    email: 'angelica@mail.com',
    desc: 'Can\'t wait to meet you all <3'
})

qai = User.create({
    username: 'QAI',
    password: 'QAI55',
    email: 'qai@mail.com',
    desc: 'Your strategies are without merit.'
})

brackman = User.create({
    username: 'Brackman',
    password: 'brackman55',
    email: 'brackman@gmail.com',
    desc: 'welcome my child, you shall be the tip of our spear. oh yes. The tip of our spear.'
})

split = User.create({
    username: 'Split',
    password: 'split55',
    email: 'split@mail.com',
    desc: 'What does Terran want with Split?'
})

shadowhybread = User.create({
    username: 'Shadowhybread',
    password: 'shadowhybread55',
    email: 'shadowhybread@mail.com',
    desc: 'What are you even doing here, lol xd'
})

rotbow = User.create({
    username: 'ROTBOW',
    password: 'rotbow55',
    email: 'rotbow@mail.com',
    desc: 'Wait a second, I built this site!'
})


# template = User.create({
#     username: '',
#     password: '',
#     email: '',
#     desc: ''
# })


# gonna need around 20-30 games in the final app
Game.delete_all

from_the_depths = Game.create({
    title: 'From The Depths',
    description: 'Over 1000 unique components allow you to build and command voxel vehicles from the deep ocean to outer space- including battleships, planes, submarines and space ships! Forge strategies, allegiances and fleets strong enough to destroy eight deadly factions of the planet and reign supreme.',
    cost: 24.99,
    images_url: 'https://i.ibb.co/nwn1BVw/0-ftd.jpg<SEPA>https://i.ibb.co/m9kj5r0/1-ftd.jpg<SEPA>https://i.ibb.co/s90xJqg/2-ftd.jpg<SEPA>https://i.ibb.co/KKTz6zv/3-ftd.jpg<SEPA>https://i.ibb.co/72SrYLC/4-ftd.jpg<SEPA>https://i.ibb.co/tZJ0mVg/5-ftd.jpg'
    })

supcom_fa = Game.create({
    title: 'Supreme Commander Forged Alliance',
    description: 'The last days of man are at hand.. Two years after the Infinite War the once great warring nations now lie in ruins, and humanity’s hope for a brighter future is nothing but a bitter memory.',
    cost: 12.99,
    images_url: 'https://i.ibb.co/FWH8zsc/0-supcomfa.jpg<SEPA>https://i.ibb.co/sJdWVW6/1-supcomfa.jpg<SEPA>https://i.ibb.co/WF66TNm/2-supcomfa.jpg<SEPA>https://i.ibb.co/pXYwRNG/3-supcomfa.jpg<SEPA>https://i.ibb.co/mCRFxk1/4-supcomfa.jpg'
})
black_desert = Game.create({
    title: 'Black Desert Online',
    description: 'Black Desert is a sandbox, living-world MMORPG. Experience fast-paced, action-packed combat, hunt monsters and huge bosses, fight with friends in a guild to siege nodes and conquer castles, train your life skills such as fishing, trading, crafting, cooking, and much more!',
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
    description: 'X3: Farnham\'s Legacy is a new game in the X3 space game series. TRADE, FIGHT, BUILD, THINK in a living and breathing universe. It incorporates a new storyline and yet more additions to the open, free-form gameplay that forms the core of all X series games.',
    cost: 0,
    images_url: 'https://i.ibb.co/D8hGqq1/0-x3fl.jpg<SEPA>https://i.ibb.co/1GW5fvJ/1-x3fl.jpg<SEPA>https://i.ibb.co/ckNMvSN/2-x3fl.jpg<SEPA>https://i.ibb.co/N73VNVP/3-x3fl.jpg<SEPA>https://i.ibb.co/FK8zpCW/4-x3fl.jpg'
})

dead_by_daylight = Game.create({
    title: 'Dead By Daylight',
    description: 'Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.',
    cost: 19.99,
    images_url: 'https://i.ibb.co/Wtr2Jf8/0-dbd.jpg<SEPA>https://i.ibb.co/8BYTMbn/1-dbd.jpg<SEPA>https://i.ibb.co/VCkYS8Q/2-dbd.jpg<SEPA>https://i.ibb.co/x7Xg3Sz/3-dbd.jpg<SEPA>https://i.ibb.co/37vQHFR/4-dbd.jpg'
})

stellaris = Game.create({
    title: 'Stellaris',
    description: 'Explore a galaxy full of wonders in this sci-fi grand strategy game from Paradox Development Studios. Interact with diverse alien races, discover strange new worlds with unexpected events and expand the reach of your empire. Each new adventure holds almost limitless possibilities.',
    cost: 49.99,
    images_url: 'https://i.ibb.co/M6p8RfL/0-stellaris.jpg<SEPA>https://i.ibb.co/6WmnjNf/1-stellaris.jpg<SEPA>https://i.ibb.co/3SZb6x6/2-stellaris.jpg<SEPA>https://i.ibb.co/1R56m7M/3-stellaris.jpg<SEPA>https://i.ibb.co/pJgLVHp/4-stellaris.jpg'
})

factorio = Game.create({
    title: 'Factorio',
    description: 'Factorio is a game about building and creating automated factories to produce items of increasing complexity, within an infinite 2D world. Use your imagination to design your factory, combine simple elements into ingenious structures, and finally protect it from the creatures who don\'t really like you.',
    cost: 30.00,
    images_url: 'https://i.ibb.co/8PDDbhk/0-factorio.jpg<SEPA>https://i.ibb.co/BZB8MZR/1-factorio.jpg<SEPA>https://i.ibb.co/zS1Q7hj/2-factorio.jpg<SEPA>https://i.ibb.co/cg0WnvN/3-factorio.jpg<SEPA>https://i.ibb.co/ZGB9cQn/4-factorio.jpg'
})

gta = Game.create({
    title: 'Grand Theft Auto',
    description: 'Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.',
    cost: 29.99,
    images_url: 'https://i.ibb.co/MZzPSGT/0-gta.jpg<SEPA>https://i.ibb.co/dM8MCPn/1-gta.jpg<SEPA>https://i.ibb.co/wC69KNd/2-gta.jpg<SEPA>https://i.ibb.co/pPZxCg5/3-gta.jpg<SEPA>https://i.ibb.co/hKdDWBF/4-gta.jpg'
})

warframe = Game.create({
    title: 'Warframe',
    description: 'Warframe is a cooperative free-to-play third person online action game set in an evolving sci-fi world.',
    cost: 0,
    images_url: 'https://i.ibb.co/M2n2hxW/0-warframe.jpg<SEPA>https://i.ibb.co/JrcR7gD/1-warframe.jpg<SEPA>https://i.ibb.co/9rFh6v8/2-warframe.jpg<SEPA>https://i.ibb.co/Msnv397/3-warframe.jpg<SEPA>https://i.ibb.co/fQgTgbD/4-warframe.jpg'
})

keeperrl = Game.create({
    title: 'KeeperRL',
    description: 'Ambitious dungeon simulator with roguelike and RPG elements. Take the role of an evil wizard and study the methods of black magic. Equip your minions and explore the world, murder innocent villagers and burn their homes. Build your dungeon, lay traps and prepare for an assault of angry heroes.',
    cost: 19.99,
    images_url: 'https://i.ibb.co/cwThJgC/0-keeperrl.jpg<SEPA>https://i.ibb.co/n7F0pHk/1-keeperrl.jpg<SEPA>https://i.ibb.co/yBRtts4/2-keeperrl.jpg<SEPA>https://i.ibb.co/PW5WKP8/3-keeperrl.jpg<SEPA>https://i.ibb.co/JkQMccr/4-keeperrl.jpg'
})

gmod = Game.create({
    title: 'Garry\'s Mod',
    description: 'Garry\'s Mod is a physics sandbox. There aren\'t any predefined aims or goals. We give you the tools and leave you to play.',
    cost: 9.99,
    images_url: 'https://i.ibb.co/KNZ9MGv/0-gmod.jpg<SEPA>https://i.ibb.co/68vRNVF/1-gmod.jpg<SEPA>https://i.ibb.co/685pCgQ/2-gmod.jpg<SEPA>https://i.ibb.co/gvyy6y0/3-gmod.jpg<SEPA>https://i.ibb.co/fXD0QW0/4-gmod.jpg'
})

elite_dangerous = Game.create({
    title: 'Elite Dangerous',
    description: 'Take control of your own starship in a cutthroat galaxy. Elite Dangerous is the definitive massively multiplayer space epic.',
    cost: 29.99,
    images_url: 'https://i.ibb.co/CWkq9Qm/0-elite.jpg<SEPA>https://i.ibb.co/yXH12Gr/1-elite.jpg<SEPA>https://i.ibb.co/dgDwjZz/2-elite.jpg<SEPA>https://i.ibb.co/mtX8R7v/3-elite.jpg<SEPA>https://i.ibb.co/vJqMvgV/4-elite.jpg'
})

# template = Game.create({
#     title: '',
#     description: '',
#     cost: 0,
#     images_url: ''
# })

UsersGame.delete_all

Game.all.each do |game|
    UsersGame.create!({
        user_id: admin.id,
        game_id: game.id,
        owned: true
    })
    UsersGame.create!({
        user_id: shadowhybread.id,
        game_id: game.id,
        owned: true
    })
    UsersGame.create!({
        user_id: rotbow.id,
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

split_game_1 = UsersGame.create({
    user_id: split.id,
    game_id: x3_farnhams_legacy.id,
    owned: true
})

split_game_2 = UsersGame.create({
    user_id: split.id,
    game_id: black_desert.id,
    owned: true
})

brackman_game = UsersGame.create({
    user_id: brackman.id,
    game_id: supcom_fa.id,
    owned: true
})

qai_game = UsersGame.create({
    user_id: qai.id,
    game_id: supcom_fa.id,
    owned: true
})

angelica_game = UsersGame.create({
    user_id: angelica.id,
    game_id: black_desert.id,
    owned: true
})

maddog_game = UsersGame.create({
    user_id: maddog.id,
    game_id: war_thunder.id,
    owned: true
})



CartItem.delete_all


demo_cart_item_1 = CartItem.create!({
    user_id: demo.id,
    game_id: supcom_fa.id
})

demo_cart_2 = CartItem.create({
    user_id: demo.id,
    game_id: black_desert.id
})