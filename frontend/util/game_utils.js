
export const fetchGames = () => {
    return $.ajax({
        url: 'api/games',
        method: 'GET'
    })
}

export const fetchGame = gameId => {
    return $.ajax({
        url: `api/games/${gameId}`,
        method: 'GET'
    })
}

export const fetchGameImages = imagesUrl => {
    return $.ajax({
        url: `api/games/images/${imagesUrl}`,
        method: 'GET'
    })
}

