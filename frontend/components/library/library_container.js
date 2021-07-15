import { connect } from 'react-redux';
import { fetchRelations } from '../../actions/users_games_actions';
import Library from './library';

const mapStateToProps = state => {
    return {
        currentUser: state.sessionUser,
        ownedGames: state.entities.library
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRelations: userId => dispatch(fetchRelations(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);