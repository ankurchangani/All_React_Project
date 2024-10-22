const initialState = {
    count: 0 
};

const reducerCounter = (state = initialState, action) => {
    switch(action.type) {
        case "inc":
            return {
                ...state,
                count: state.count + 1
            };

        case "dec":
            return {
                ...state,
                count: state.count - 1
            };

        default:
            return state;
    }
};

export default reducerCounter;
