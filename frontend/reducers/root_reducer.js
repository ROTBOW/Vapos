import { combineReducers } from 'redux';
import EntitesReducer from './entities_reducer';
import SessionReducer from './session_reducer';



const RootReducer = combineReducers({
    entities: EntitesReducer,
    sessionUser: SessionReducer
})

export default RootReducer;