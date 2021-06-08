import React from 'react';
import StoreBar from './store_bar';


class GamePage extends React.Component {

    componentDidMount() {
        this.props.fetchGame(this.props.match.params.gameId)
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

                    <img src={game.images[0]}/>
                    <p>{game.description}</p>

                    <label>${game.cost}
                        <button>Add to Cart</button>
                    </label>
                </div>
            )
        }
    }

}


export default GamePage;