import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';



const RootReducer = combineReducers({
    entities: EntitiesReducer,
    errors: ErrorsReducer,
    sessionUser: SessionReducer
})

export default RootReducer;