import { combineReducers } from 'redux';
import GamesReducer from './games_reducer';
import UsersReducers from './users_reducer';


const EntitiesReducer = combineReducers({
    users: UsersReducers,
    games: GamesReducer
})

export default EntitiesReducer;