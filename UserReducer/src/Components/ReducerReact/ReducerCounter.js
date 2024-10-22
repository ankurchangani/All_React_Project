const initialState = { count: 0 };

const reducerCounter = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };

        case 'decrement':
            return { count: state.count > 0 ? state.count - 1 : 0 };    

        case 'reset':
            return initialState;
            
        default:
            throw new Error();
    }
};

export default reducerCounter;
