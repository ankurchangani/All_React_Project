const initialState = {
    recipes: [],
    loading: false,
    error: null,
  };
  
  const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_RECIPES_REQUEST':
        return {
          ...state,
          loading: true,
        };
        case 'FETCH_RECIPES_SUCCESS':
            return {
              ...state,
              loading: false, // Make sure to set loading to false here
              recipes: action.payload.map(recipe => ({
                ...recipe,
                ingredients: recipe.ingredients || [], // Ensure ingredients is always an array
              })),
            };
          
      case 'FETCH_RECIPES_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default recipeReducer;
  