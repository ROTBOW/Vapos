import * as UserAPIUtils from '../util/users_util'


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

export const fetchAllUsers = () => dispatch =>{
    return UserAPIUtils.fetchUsers()
        .then(users => dispatch(receiveAllUsers(users)))
}

export const fetchUser = userId => dispatch => {
    return UserAPIUtils.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
}

export const createUser = user => dispatch => {
    return UserAPIUtils.createUser(user)
        .then(user => dispatch(receiveUser(user)))
}

export const updateUser = user => dispatch => {
    return UserAPIUtils.updateUser(user)
        .then(user => dispatch(receiveUser(user)))
}

export const deleteUser = userId => dispatch => {
    return UserAPIUtils.updateUser(userId)
        .then(() => dispatch(receiveUser(userId)))
}