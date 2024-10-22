import { collection,  getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../../fierbase"; 


const generateUniqueId = () => {
    return Math.floor(Math.random() * 10000); 
};

export const addRecipe = async (recipeData) => {
    try {
        const uniqueId = generateUniqueId(); 
        const newRecipeData = { ...recipeData, id: uniqueId }; 

        await setDoc(doc(collection(db, "recipes"), uniqueId.toString()), newRecipeData);
        
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
};

// Check if these are correctly set in your reducer
const FETCH_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST';
const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';

// Action Creators
export const fetchRecipes = () => async (dispatch) => {
    dispatch({ type: FETCH_RECIPES_REQUEST });
    console.log("Fetching recipes...");

    try {
        const querySnapshot = await getDocs(collection(db, "recipes"));
        const recipes = [];

        querySnapshot.forEach((doc) => {
            recipes.push({ id: doc.id, ...doc.data() });
        });

        console.log("Recipes fetched:", recipes);

        dispatch({ type: FETCH_RECIPES_SUCCESS, payload: recipes });
    } catch (error) {

        console.error("Error fetching recipes: ", error);

        dispatch({ type: FETCH_RECIPES_FAILURE, payload: error }); 
    }
};
