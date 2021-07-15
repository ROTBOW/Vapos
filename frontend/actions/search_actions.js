import { searchPlayer } from "../util/selectors";

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

const receiveSearch = search => {
    return {
        type: RECEIVE_SEARCH,
        search
    }
}

export const fetchSearch = (searchTerm) => dispatch =>{
    return searchPlayer(searchTerm)
        .then(search => dispatch(receiveSearch(search)))
}