

export const login = user => {
    return $.ajax({
        url: 'api/login',
        method: 'POST',
        data: { user }
    })
}


export const logout = () => {
    return $.ajax({
        url: 'api/login',
        method: 'DELETE'
    })
}