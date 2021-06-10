import { RECEIVE_CART_ITEM, RECEIVE_CART_ITEMS, REMOVE_CART_ITEM } from '../actions/cart_actions';


const CartReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {

        case RECEIVE_CART_ITEMS:
            return action.cartItems

        case RECEIVE_CART_ITEM:
            nextState[action.cartItem.relation_id] = action.cartItem;
            return nextState;

        case REMOVE_CART_ITEM:
            delete nextState[action.itemId];
            return nextState;

        default:
            return state
    }

}

export default CartReducer;