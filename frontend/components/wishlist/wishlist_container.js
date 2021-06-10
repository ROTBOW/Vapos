import { connect } from 'react-redux';
import Wishlist from './wishlist';
import { destroyRelation, fetchRelations } from '../../actions/users_games_actions';

const mapStateToProps = state => {
    return {
        wishlist: state.entities.wishlist,
        currentUser: state.sessionUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRelations: userId => dispatch(fetchRelations(userId)),
        removeRelations: relationId => dispatch(destroyRelation(relationId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);