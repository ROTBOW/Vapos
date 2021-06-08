import { connect } from 'react-redux';
import { fetchAllGames, fetchGameImages } from '../../actions/games_actions';
import GameCarousel from './game_carousel';

const mapStateToProps = state => {
    return {
        games: state.entities.games
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllGames: () => dispatch(fetchAllGames()),
        fetchGameImages: gameUrl => dispatch(gameUrl)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(GameCarousel);