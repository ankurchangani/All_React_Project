const initialState = {
    notes: [],
    loading: false,
    error: null,
  };
  
  export const TakenotesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_NOTE":
        return {
          ...state,
          notes: [...state.notes, action.payload],
        };
      case "SET_NOTES":
        return {
          ...state,
          notes: action.payload,
        };
      case "SET_LOADING":
        return {
          ...state,
          loading: action.payload,
        };
      case "SET_ERROR":
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  