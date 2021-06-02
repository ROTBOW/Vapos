import { combineReducers } from 'redux';
import UsersReducers from './users_reducer';


const EntitesReducer = combineReducers({
    users: UsersReducers
})

export default EntitesReducer;