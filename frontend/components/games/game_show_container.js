import { connect } from 'react-redux';
import { fetchGame } from '../../actions/games_actions';
import { createRelation } from '../../actions/users_games_actions';
import GamePage from './game_show';


const mapStateToProps = (state, ownProps) => {
    return {
        game: state.entities.games[ownProps.match.params.gameId],
        currentUser: state.sessionUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGame: gameId => dispatch(fetchGame(gameId)),
        addToWishlist: relation => dispatch(createRelation(relation))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);