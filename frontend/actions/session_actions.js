import * as sessionApiUtil from '../util/session_util'


export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';


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

export const sendLogin = user => dispatch => {
    return sessionApiUtil.login(user)
        .then(user => {
            return dispatch(receiveLogin(user))
        })
}

export const sendLogout = () => dispatch => {
    return sessionApiUtil.logout()
        .then(() => dispatch(receiveLogout()))
}