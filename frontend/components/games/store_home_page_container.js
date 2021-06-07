import { connect } from 'react-redux';
import { fetchAllGames } from '../../actions/games_actions';
import StoreHomePage from './store_home_page';

const mapStateToProps = state => {

    return {
        currentUser: state.sessionUser,
        games: state.entities.games
    }

}


const mapDispatchToProps = dispatch => {
    return {
        fetchAllGames: () => dispatch(fetchAllGames())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreHomePage);