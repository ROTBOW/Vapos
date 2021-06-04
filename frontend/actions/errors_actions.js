

export const REMOVE_ERROR = 'REMOVE_ERROR';


export const removeError = errorId => {
    return {
        type: REMOVE_ERROR,
        errorId
    }
}