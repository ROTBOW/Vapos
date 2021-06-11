import { connect } from 'react-redux';
import Wishlist from './wishlist';
import { destroyRelation, fetchRelations } from '../../actions/users_games_actions';
import { createCartItem } from '../../actions/cart_actions';

const mapStateToProps = state => {
    return {
        wishlist: state.entities.wishlist,
        currentUser: state.sessionUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRelations: userId => dispatch(fetchRelations(userId)),
        removeRelation: relationId => dispatch(destroyRelation(relationId)),
        addToCart: relation => dispatch(createCartItem(relation))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);