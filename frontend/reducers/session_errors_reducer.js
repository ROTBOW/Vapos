import { RECEIVE_SESSION_ERRORS, RECEIVE_LOGIN, RESET_ERRORS } from '../actions/session_actions';
import { REMOVE_ERROR } from '../actions/errors_actions'
import { RECEIVE_USER } from '../actions/users_actions'
  
const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = Object.assign([], state);

  switch (action.type) {
      case RECEIVE_SESSION_ERRORS:
      return action.errors;

      case REMOVE_ERROR:
      nextState = nextState.slice(0, action.errorId).concat(nextState.slice(action.errorId+1))
      return nextState

      case RECEIVE_LOGIN:
      return [];

      case RECEIVE_USER:
      return [];

      case RESET_ERRORS:
      return [];
      
      default:
      return state;
  }
};

export default SessionErrorsReducer;