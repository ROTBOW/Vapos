import React from 'react';
import StoreBar from './store_bar';
import GameImageCarousel from './game_image_carousel';


class GamePage extends React.Component {


    constructor(props){
        super(props)

        this.handleBuyButton = this.handleBuyButton.bind(this)
        this.handleWishlistButton = this.handleWishlistButton.bind(this)
    }

    componentDidMount() {
        this.props.fetchGame(this.props.match.params.gameId);
    }


    handleBuyButton(e){
        e.preventDefault();
        if (!!this.props.currentUser) {
            console.log('this doesn\'t do anything yet but it will');
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


    render(){
        
        if (this.props.game === undefined) {
            return <div>crap, im broken again</div>
        } else {
            let game = this.props.game;

            let buyButton;
            if (game.cost === 0) {
                buyButton = [
                    'Play',
                    'Free',
                    'Add To Library'
                ]
            } else {
                buyButton = [
                    'Buy',
                    `$${game.cost}`,
                    'Add To Cart'
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
                        <button onClick={this.handleWishlistButton} >Add to your wishlist</button>
                    </div>

                    <h2>{buyButton[0]} {game.title}</h2>
                    <label>{buyButton[1]}
                        <button onClick={this.handleBuyButton}>{buyButton[2]}</button>
                    </label>

                </div>
            )
        }
    }

}


export default GamePage;