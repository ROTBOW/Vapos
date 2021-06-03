import { RECEIVE_SESSION_ERRORS, RECEIVE_LOGIN, RESET_ERRORS } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/users_actions'
  
const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
      case RECEIVE_SESSION_ERRORS:
      return action.errors;

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