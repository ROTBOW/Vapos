import React from 'react';
import { Link } from 'react-router-dom';


// expects to receive an array of games, called 'games'

class GameCarousel extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            games: {},
            currentGame: 0
        }
        
    }

    componentDidMount() {
        this.props.fetchAllGames()
    }

    render() {

        let gamesMap = {};
        let i = 0;
        let tempStr = this.props.str.split('*')
        for (let id in this.props.games){
            if (tempStr.includes(this.props.games[id].title)) {
                gamesMap[i] = this.props.games[id]
                i++
            }
        }
        if (Object.keys(gamesMap).length === 0) gamesMap = undefined;
        // gamesMap = {id: null, title: 'placeholder-title', description: 'placeholder-desc', cost: 15.99, imagesUrl: null}
        
        if (gamesMap != undefined) {
            console.log(gamesMap);
                return (
                    <div id="game-carousel">
                    <button>left</button>
                    {/* <Link> */}

                    <img src='' alt={`${gamesMap[this.state.currentGame].title}`}/>
                    <div>
                        <p>this will be more info/images</p>
                    </div>

                    {/* </Link> */}
                    <button>right</button>
                </div>
            )
        } else {
            return (
                <div>whoops</div>
            )
        }
    }

}

export default GameCarousel;