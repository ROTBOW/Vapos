import * as CartUtil from '../util/cart_utils';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';



const receiveCartItems = cartItems => {
    return {
        type: RECEIVE_CART_ITEMS,
        cartItems
    }
}

const receiveCartItem = cartItem => {
    return {
        type: RECEIVE_CART_ITEM,
        cartItem
    }
}

const removeCartItem = itemId => {
    return {
        type: REMOVE_CART_ITEM,
        itemId
    }
}


export const fetchCartItems = userId => dispatch => {
    return CartUtil.fetchCart(userId)
        .then(items => dispatch(receiveCartItems(items)))
}

export const createCartItem = relation => dispatch => {
    return CartUtil.createCart(relation)
        .then(items => dispatch(receiveCartItem(items)))
}

export const destroyCartItem = relationId => dispatch => {
    return CartUtil.removeCart(relationId)
        .then(() => dispatch(removeCartItem(relationId)))
}