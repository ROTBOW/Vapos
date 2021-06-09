import React from 'react';
import StoreBar from './store_bar';
import GameImageCarousel from './game_image_carousel';


class GamePage extends React.Component {

    componentDidMount() {
        this.props.fetchGame(this.props.match.params.gameId);
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

                    <h2>{buyButton[0]} {game.title}</h2>
                    <label>{buyButton[1]}
                        <button>{buyButton[2]}</button>
                    </label>

                </div>
            )
        }
    }

}


export default GamePage;