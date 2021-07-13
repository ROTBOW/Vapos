import { RECEIVE_RELATION, RECEIVE_RELATIONS, REMOVE_RELATION } from '../actions/users_games_actions';


let findOwned = (pojo) => {
    let answer = {};

    for (let relation in pojo) {
        if (pojo[relation].owned === true) {
            answer[pojo[relation].relation_id] = pojo[relation]
        }
    }

    return answer;
}



const LibraryReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {

        case RECEIVE_RELATIONS:
            let temp = findOwned(action.relations);
            return temp

        case RECEIVE_RELATION:
            nextState[action.relation.relation_id] = action.relation;
            return nextState;

        case REMOVE_RELATION:
            delete nextState[action.relationId]
            return nextState;

        default: return state;
    }
}

export default LibraryReducer;