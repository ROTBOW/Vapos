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
            return (
                <div>
                    <StoreBar/>

                    <h1>{game.title}</h1>

                    <div id="game-show-main-widow">

                        <GameImageCarousel images={game.images.slice(1)}/>

                        <div id="game-show-right-wing">
                            <img src={game.images[0]} width="324" height="151" />
                            <p>{game.description}</p>

                        </div>

                    </div>
                            <label>${game.cost}
                                <button>Add to Cart</button>
                            </label>

                </div>
            )
        }
    }

}


export default GamePage;