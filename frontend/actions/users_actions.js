import * as UserAPIUtils from '../util/users_util';
import { RECEIVE_SESSION_ERRORS } from './session_actions';


export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';




const receiveAllUsers = users => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}

const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
}

const removeUser = userId => {
    return {
        type: REMOVE_USER,
        userId
    }
}

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const fetchAllUsers = () => dispatch =>{
    return UserAPIUtils.fetchUsers()
        .then(users => dispatch(receiveAllUsers(users)))
}

export const fetchUser = userId => dispatch => {
    return UserAPIUtils.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
}

export const createUser = user => dispatch => (
    UserAPIUtils.createUser(user).then(user => (
        dispatch(receiveUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);


export const updateUser = user => dispatch => {
    return UserAPIUtils.updateUser(user)
        .then(user => dispatch(receiveUser(user)))
}

export const deleteUser = userId => dispatch => {
    return UserAPIUtils.updateUser(userId)
        .then(() => dispatch(removeUser(userId)))
}