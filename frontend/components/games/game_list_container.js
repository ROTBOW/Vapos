import { connect } from 'react-redux';
import { fetchAllGames } from '../../actions/games_actions'
import GameList from './game_list';

const mapStateToProps = state => ({
    games: state.entities.games
})


const mapDispatchToProps = dispatch => ({
    fetchAllGames: () => dispatch(fetchAllGames())
})

export default connect(mapStateToProps, mapDispatchToProps)(GameList);