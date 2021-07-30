# Readme <img style="float: right" src="https://github.com/ROTBOW/Vapos/blob/main/app/assets/images/ui/logo_vapos.png" alt="Vapos Logo"> 

Welcome to [Vapos](https://vapos.herokuapp.com/#/), the Steam clone. Vapos is a ecomeroce site, where the main product is video games. WIth it you can browse, wishlist, and add games to cart.

![home-page]()


Tech Used:

* React & Redux for frontend
* Ruby Rails for backend
* Heroku for site hosting
* Imgbb for img hosting



### **Home Page Carousel**

![carousel]()

The iconic game carousel on the store home page was made from scratch. It is its own dedicated componet. It is used for showcasing a small list of games.

The carousel is cabible of recicving a list of games that are stored in the database and displaying them. While techonly it doesn't have a limit to how many games you can give it to showcase, too many can cause some graphical discrepancies so it is ill adviced.

The original design of the carousel relied on information sent in from the store page component however, this wouldn't work since the component would be loaded in before the information was ready. To combat this I remade the carousel so that it could accept a string of game names, it would then search the database for those games and display them.

One of the interesting features of the carousel is the line of boxes just below it, they allow a user to go directly to a game in the carousel, in addition, they let a user know where they are in the carousel. The creation of them can be seen as follows:
```javascript
let boxes = [];
for ( let game in gamesMap ) {
    let posiClass = (game === currentGame.toString()) ? 'game-carousel-box-active' : '';
    boxes.push(<div key={game} className={`game-carousel-box ${posiClass}`} onClick={e => this.setState({currentGame: Number(game)})}/>)
};
```
the above code creates a box for each game in the carousel, if that game is the current game in the carousel, meaning the one on display, it gives that box the `game-carousel-box-active` html/css class which styles it properly.  