import React from 'react';
import { Link } from 'react-router-dom';


// expects to receive an array of games, called 'games'

class GameCarousel extends React.Component {
    constructor(props){
        super(props)

        // for (let i = 0; i < props.games.length; i++) {
        //     tempMap[i] = props.games[i]
        // }
        console.log(this.props.str)

        let tempMap = {}
        let i = 0;
        for (let id in this.props.games){
            console.log(this.props.games[id].title);
            if (this.props.str.split('*').includes(this.props.games[id].title)) {
                tempMap[i] = this.props.games[id]
                i++
            }
        }


        this.state = {
            games: tempMap,
            currentGame: 0
        }

        
    }

    // componentDidMount() {
    //     this.props.fetchGames();
    // }

    render() {

        // console.log(this.state)

        return (
            <div id="game-carousel">
                <button>left</button>
                {/* <Link> */}

                <img src='' alt='game img'/>
                <div>
                    <p>this will be more info/images</p>
                </div>

                {/* </Link> */}
                <button>right</button>
            </div>
        )
    }

}

export default GameCarousel;