import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';



const RootReducer = combineReducers({
    sessionUser: SessionReducer
})

export default RootReducer;