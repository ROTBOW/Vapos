import * as sessionApiUtil from '../util/session_util'


export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RESET_ERRORS = 'RESET_ERRORS';


const receiveLogin = user => {
    return {
        type: RECEIVE_LOGIN,
        user
    }
}

const receiveLogout = () => {
    return {
        type: RECEIVE_LOGOUT
    }
}

export const resetErrors = () => {
    return {
        type: RESET_ERRORS
    }
}

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const sendLogin = user => dispatch => (
    sessionApiUtil.login(user).then(user => (
        dispatch(receiveLogin(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const sendLogout = () => dispatch => {
    return sessionApiUtil.logout()
        .then(() => dispatch(receiveLogout()))
}