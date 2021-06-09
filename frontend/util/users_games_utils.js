


export const fetchRelation = userId => {
    return $.ajax({
        url: `api/users_games/${userId}`,
        method: 'GET'
    })
}

export const createRelation = data => {
    return $.ajax({
        url: `api/users_games`,
        method: 'POST',
        data
    })
}


export const destroyRelation = relationId => {
    return $.ajax({
        url: `api/users_games/${relationId}`,
        method: 'DELETE'
    })
}