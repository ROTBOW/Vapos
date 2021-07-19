import { connect } from 'react-redux';
import { createCartItem, fetchCartItems } from '../../actions/cart_actions';
import { fetchGame } from '../../actions/games_actions';
import { createRelation, fetchRelations, destroyRelation } from '../../actions/users_games_actions';
import GamePage from './game_show';


const mapStateToProps = (state, ownProps) => {
    return {
        game: state.entities.games[ownProps.match.params.gameId],
        wishlist: state.entities.wishlist,
        library: state.entities.library,
        cart: state.entities.cart,
        currentUser: state.sessionUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGame: gameId => dispatch(fetchGame(gameId)),
        addToWishlist: relation => dispatch(createRelation(relation)),
        removeFromWishlist: relationId => dispatch(destroyRelation(relationId)),
        fetchRelations: userId => dispatch(fetchRelations(userId)),
        fetchCart: userId => dispatch(fetchCartItems(userId)),
        addToCart: relation => dispatch(createCartItem(relation))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);