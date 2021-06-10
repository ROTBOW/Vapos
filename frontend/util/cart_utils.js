

export const fetchCart = userId => {
    return $.ajax({
        url: `api/cart_items/${userId}`,
        method: 'GET'
    })
}

export const createCart = data => {
    return $.ajax({
        url: `api/cart_items`,
        method: 'POST',
        data
    })

}
export const removeCart = relationId => {
    return $.ajax({
        url: `api/cart_items/${relationId}`,
        method: 'DELETE'
    })
}