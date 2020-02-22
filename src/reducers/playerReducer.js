const INITIAL_STATE = {
    selectedMovie: null
}

const playerReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case 'SET_SELECTED_MOVIE': {
            return {
                ...state,
                selectedMovie: action.payload.movie
            }
        }
        default: {
            return state
        }
    }
}

export default playerReducer