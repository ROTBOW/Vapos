import { combineReducers } from 'redux';
import CartReducer from './cart_reducer';
import GamesReducer from './games_reducer';
import UsersReducers from './users_reducer';
import WishlistReducer from './wishlist_reducer';


const EntitiesReducer = combineReducers({
    users: UsersReducers,
    games: GamesReducer,
    wishlist: WishlistReducer,
    cart: CartReducer
})

export default EntitiesReducer;