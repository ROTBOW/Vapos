import React from "react";
import { isEmpty } from './../profile/profile';
import { Link } from 'react-router-dom';

class Library extends React.Component {
    constructor(props) {
        super (props);
    }

    componentDidMount() {
        this.props.fetchRelations(this.props.currentUser.id);
    }


    render(){
        if (isEmpty(this.props.ownedGames)) {
            return (
                <div>here we are has no games</div>
                )
        } else {

            let games = [];
            for (let id in this.props.ownedGames) {
                let game = this.props.ownedGames[id];
                games.push(
                        <li key={id}>
                            <Link to={`/games/${game.id}`} >
                                <img src={game.images[0]}></img>
                            </Link>
                        </li>
                    )
            }

            return (
                <div className="library">
                    <h1>{this.props.currentUser.username.toUpperCase()}'S LIBRARY</h1>
                    <ul className="library-game-grid">
                        {games}
                    </ul>
                </div>
            )
        }
    }
}

export default Library;