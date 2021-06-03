import { RECEIVE_LOGIN, RECEIVE_LOGOUT } from '../actions/session_actions'

let initState = null

const SessionReducer = (state = initState, action) => {
    Object.freeze(state);

    
    switch(action.type){

        case RECEIVE_LOGIN:
            return action.user;

        case RECEIVE_LOGOUT:
            return initState;

        default:
            return state;
    }
}

export default SessionReducer;