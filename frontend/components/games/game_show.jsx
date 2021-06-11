import React from 'react';
import StoreBar from './store_bar';
import GameImageCarousel from './game_image_carousel';


class GamePage extends React.Component {


    constructor(props){
        super(props)

        this.handleBuyButton = this.handleBuyButton.bind(this)
        this.handleWishlistButton = this.handleWishlistButton.bind(this)
        this.removeWishlistButton = this.removeWishlistButton.bind(this)
        this.findMeInWishlist = this.findMeInWishlist.bind(this)
        this.cartIncludesMe = this.cartIncludesMe.bind(this)
    }

    componentDidMount() {
        this.props.fetchGame(this.props.match.params.gameId);

        if (!!this.props.currentUser) {
            this.props.fetchRelations(this.props.currentUser.id)
            this.props.fetchCart(this.props.currentUser.id)
        }
    }


    handleBuyButton(e){
        e.preventDefault();
        if (!!this.props.currentUser) {
            this.props.addToCart({
                relation: {
                    user_id: this.props.currentUser.id,
                    game_id: this.props.game.id
                }
            })
            this.props.history.replace('/cart')
        } else {
            this.props.history.replace('/login');
        }
    }

    handleWishlistButton(e){
        e.preventDefault();
        if (!!this.props.currentUser) {
            this.props.addToWishlist({
                relation: {
                    user_id: this.props.currentUser.id,
                    game_id: this.props.game.id,
                    owned: false
                }
            })
        } else {
            this.props.history.replace('/login');
        }
    }

    removeWishlistButton(relationId){
        return e => {e.preventDefault();
            if (!!this.props.currentUser) {
                this.props.removeFromWishlist(relationId)
            } else {
                this.props.history.replace('/login');
            }
        }
    }

    findMeInWishlist() {
        let wishlist = this.props.wishlist;

        for (let relation in wishlist) {
            if (wishlist[relation].id === this.props.game.id) {
                return wishlist[relation].relation_id
            }
        }
    }

    cartIncludesMe(game) {
        for (let id in this.props.cart){
            let cartGame = this.props.cart[id];
            if (cartGame.title === game.title) return true;
        }
        return false;
    }


    render(){
        
        if (this.props.game === undefined) {
            return <div>crap, im broken again</div>
        } else {
            let game = this.props.game;
            
            let wishlistButton;
            if (this.findMeInWishlist(this.props.wishlist) === undefined) {
                wishlistButton = <button onClick={this.handleWishlistButton} >Add to your wishlist</button>
            } else {
                wishlistButton = <button onClick={this.removeWishlistButton(this.findMeInWishlist())} >Wishlisted</button>   
            }

            let buyButton;
            if (game.cost === 0) {
                buyButton = [<h2 key='1'>play {game.title}</h2>,
                    <label key='2'>Free
                        <button onClick={this.handleBuyButton}>Add To Library</button>
                    </label>]
            } else {
                buyButton = [<h2 key='1'>Buy {game.title}</h2>,
                    <label key='2'>${game.cost}
                        <button onClick={this.handleBuyButton}>Add To Cart</button>
                    </label>]
            }

            if (this.cartIncludesMe(game)) {
                buyButton = [
                    <h2 key='1'>Buy {game.title}</h2>,
                    <label key='2'>${game.cost}
                        <button onClick={e => this.props.history.replace('/cart')} >In Cart!</button>
                    </label>
                ]
            }

            return (
                <div className="game-show-page">
                    <StoreBar/>

                    <h1>{game.title}</h1>

                    <div id="game-show-main-window">

                        <GameImageCarousel images={game.images.slice(1)}/>

                        <div id="game-show-right-wing">
                            <img src={game.images[0]} width="324" height="151" />
                            <p>{game.description}</p>

                        </div>

                    </div>
                    <div id="queue-bar">
                        {wishlistButton}
                    </div>

                    {/* <h2>{buyButton[0]} {game.title}</h2>
                    <label>{buyButton[1]}
                        <button onClick={this.handleBuyButton}>{buyButton[2]}</button>
                    </label> */}
                    {buyButton}

                </div>
            )
        }
    }

}


export default GamePage;