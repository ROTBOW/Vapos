import { connect } from 'react-redux';
import { fetchGame } from '../../actions/games_actions'
import GamePage from './game_show';


const mapStateToProps = (state, ownProps) => {
    return {
        game: state.entities.games[ownProps.match.params.gameId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGame: gameId => dispatch(fetchGame(gameId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);