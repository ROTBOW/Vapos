import * as UsersGamesUtil from '../util/users_games_utils';

export const RECEIVE_RELATIONS = 'RECEIVE_RELATIONS';
export const RECEIVE_RELATION = 'RECEIVE_RELATION';
export const REMOVE_RELATION = 'REMOVE_RELATION';



const receiveRelations = relations => {
    return {
        type: RECEIVE_RELATIONS,
        relations
    }
}

const receiveRelation = relation => {
    return {
        type: RECEIVE_RELATION,
        relation
    }
}

const removeRelation = relationId => {
    return {
        type: REMOVE_RELATION,
        relationId
    }
}

export const fetchRelations = userId => dispatch => {
    return UsersGamesUtil.fetchRelation(userId)
        .then(relations => dispatch(receiveRelations(relations)))
}


export const createRelation = relation => dispatch => {
    return UsersGamesUtil.createRelation(relation)
        .then(relation => dispatch(receiveRelation(relation)))
}

export const destroyRelation = relationId => dispatch => {
    return UsersGamesUtil.destroyRelation(relationId)
        .then(() => dispatch(removeRelation(relationId)))
}