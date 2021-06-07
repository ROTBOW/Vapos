import * as GamesAPIUtils from '../util/game_utils';

export const RECEIVE_ALL_GAMES = 'RECEIVE_ALL_GAMES';
export const RECEIVE_GAME = 'RECEIVE_GAME';
export const RECEIVE_GAME_IMAGES = 'RECEIVE_GAME_IMAGES';

const receiveAllGames = games => {
    return {
        type: RECEIVE_ALL_GAMES,
        games
    }
}

const receiveGame = game => {
    return {
        type: RECEIVE_GAME,
        game
    }
}

const receiveGameImages = images => {
    return {
        type: RECEIVE_GAME_IMAGES,
        images
    }
}

export const fetchAllGames = () => dispatch => {
    return GamesAPIUtils.fetchGames()
        .then(games => dispatch(receiveAllGames(games)))
}

export const fetchGame = gameId => dispatch => {
    return GamesAPIUtils.fetchGame(gameId)
        .then(game => dispatch(receiveGame(game)))
}

export const fetchGameImages = imageUrl => dispatch => {
    return GamesAPIUtils.fetchGameImages(imageUrl)
        .then(images => dispatch(receiveGameImages(images)))
}