
export const searchPlayer = search => {
    return $.ajax({
        url: `api/users/search/${search}`,
        method: 'get'
    })
}