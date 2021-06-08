import { RECEIVE_ALL_GAMES, RECEIVE_GAME, RECEIVE_GAME_IMAGES } from '../actions/games_actions';

const GamesReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)

    switch (action.type) {

        case RECEIVE_ALL_GAMES:
            return action.games

        case RECEIVE_GAME:
            nextState[action.game.id] = action.game
            return nextState;

        case RECEIVE_GAME_IMAGES: // prob gonna have to change this
            nextState['images'] = action.images
            return nextState;

        default:
            return state;

    }
}

export default GamesReducer;