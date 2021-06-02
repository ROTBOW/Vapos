import { RECEIVE_LOGIN, RECEIVE_LOGOUT } from '../actions/session_actions'

let initState = {
    id: 0,
    username: ''
}

const SessionReducer = (state = initState, action) => {
    Object.freeze(state);
    
    switch(action.type){

        case RECEIVE_LOGIN: // need to change the show for session login, rn it just sends back messages
            return action.user;

        case RECEIVE_LOGOUT:
            return initState;

        default:
            return state;
    }
}

export default SessionReducer;