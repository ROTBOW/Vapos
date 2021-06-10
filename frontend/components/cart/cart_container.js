import { connect } from 'react-redux';
import Cart from './cart';
import { destroyCartItem, fetchCartItems } from '../../actions/cart_actions';


const mapStateToProps = state => {
    return {
        currentUser: state.sessionUser,
        cartItems: state.entities.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeCart: itemId => dispatch(destroyCartItem(itemId)),
        fetchCartItems: userId => dispatch(fetchCartItems(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);