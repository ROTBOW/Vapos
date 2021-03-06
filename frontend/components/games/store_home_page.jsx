import React from 'react';
import GameCarouselContainer from './game_carousel_container';
import StoreBar from './store_bar';
import { isEmpty } from './../profile/profile';
import { Link } from 'react-router-dom';
import Loading from '../loading/loading';



class StoreHomePage extends React.Component {

    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchAllGames()
    }

    render() {
        let str = 'War Thunder*From The Depths*Black Desert Online*X3 Farnham\'s Legacy*Supreme Commander Forged Alliance'

        if (!isEmpty(this.props.games)) {

            let games = [];
            for (let id in this.props.games) {
                let game = this.props.games[id];
                games.push(
                        <li key={id}>
                            <Link to={`/games/${game.id}`} >
                                <img src={game.images[0]}></img>
                            </Link>
                        </li>
                    )
            }

            return (
                <main id="store-main">
    
                  
                        <StoreBar classToAdd="store-bar-store"/>
    
                        
                        <GameCarouselContainer str={str}/>
                        
    
                        <ul className="home-game-grid">
                            {games}
                        </ul>
                    
    
    
                </main>
            )
        } else {
            return(<Loading/>)
        }
    }

}

export default StoreHomePage;