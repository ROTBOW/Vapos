
/*
gonna need:

fetchUsers()
fetchUser(userId) 
createUser(user)
updateUser(user)
deleteUser(userId)

*/

export const fetchUsers = () => {
    // need backend support for this
    // rn there is nothing in the backend to handle this
    return $.ajax({
        url: `api/users`,
        method: 'GET'
    })
}

export const fetchUser = userId => {
    return $.ajax({
        url: `api/users/${userId}`,
        method: 'GET'
    })
}

export const createUser = user => {
    return $.ajax({
        url: `api/users`,
        method: 'POST',
        data: { user }
    })
}

export const updateUser = user => {
    // need backend support for this
    // rn there is nothing in the backend to handle this
    return $.ajax({
        url: `api/users/${user.id}`,
        method: 'PATCH',
        data: { user }
    })
}

export const deleteUser = userId => {
    // need backend support for this
    // rn there is nothing in the backend to handle this
    return $.ajax({
        url: `api/users/${userId}`,
        method: 'DELETE'
    })
}
