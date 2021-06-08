import React from 'react';
import { Link } from 'react-router-dom';


// expects to receive an array of games, called 'games'

class GameCarousel extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            amount: this.props.str.split('*').length,
            currentGame: 0
        }
        
        this.handleButton = this.handleButton.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllGames()
    }

    handleButton(direction) {
        return e => {
            if (direction === 'right') {
                if (this.state.currentGame+1 <= this.state.amount-1) {
                    this.setState({currentGame: this.state.currentGame + 1 })
                } else {
                    this.setState({currentGame: 0})
                }
            } else {
                if (this.state.currentGame-1 >= 0) {
                    this.setState({currentGame: this.state.currentGame - 1 })
                } else {
                    this.setState({currentGame: this.state.amount-1})
                }

            }
        }
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

        
        
        
        if (gamesMap != undefined) {
            let { currentGame } = this.state;

            let boxes = [];
            for ( let game in gamesMap ) {
                let posiClass = (game === currentGame.toString()) ? 'game-carousel-box-active' : '';
                boxes.push(<div key={game} className={`game-carousel-box ${posiClass}`} onClick={e => this.setState({currentGame: Number(game)})}/>)
            };


                return (
                <div id="game-carousel-container">
                    <div id="game-carousel">
            
                        <input type="image" src={window.leftButton} onClick={this.handleButton('left')}/>
                        <Link to={`/games/${gamesMap[currentGame].id}`}>


                        <img src={gamesMap[currentGame].images[0]} alt={`${gamesMap[currentGame].title}`} border="0"/>

                        <div id="game-carousel-info">
                            <h3>{`${gamesMap[currentGame].title}`}</h3>

                            <img alt="this will be four images in grid"/>

                            <h4>Now Available</h4>
                            <p>${gamesMap[currentGame].cost}</p>

                        </div>

                        </Link>
                        <input type="image" src={window.rightButton} onClick={this.handleButton('right')} id="game-carousl-right-button"/>
                    </div>

                    <div id="game-carousel-boxes">
                        {boxes}
                    </div>

                </div>
            )
        } else {
            return (
                <div>whoops, you shouldn't be seeing this haha...</div>
            )
        }
    }

}

export default GameCarousel;