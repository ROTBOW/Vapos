// import {}

const LibraryReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {

        default: return state;
    }
}

export default LibraryReducer;