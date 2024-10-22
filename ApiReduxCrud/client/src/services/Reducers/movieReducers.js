const initialState = {
    movies: [],
    movie: null,
    error: null, 
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GetData":
            return {
                ...state,
                movies: action.payload,
                error: null, 
            };
        case "SingleRecord":
            return {
                ...state,
                movie: action.payload,
                error: null, 
            };
        case "SetError":
            return {
                ...state,
                error: action.payload 
            };
        default:
            return state;
    }
};

export default movieReducer;
