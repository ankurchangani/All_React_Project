import { db } from "../../../Fierbase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const NOTES_COLLECTION = "notes";

const addNotes = (data) => {
  return {
    type: "ADD_NOTE",
    payload: data,
  };
};

export const createNotAsync = (note) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, NOTES_COLLECTION), note);
    note.id = docRef.id; 
    dispatch(addNotes(note));
    dispatch(getNotesAsync()); 
  } catch (error) {
    console.error("Error adding note:", error);
  }
};

export const getNotesAsync = () => async (dispatch) => {
    
    dispatch({ type: "SET_LOADING", payload: true });
  
    try {
      const querySnapshot = await getDocs(collection(db, NOTES_COLLECTION));
      const notes = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      dispatch({ type: "SET_LOADING", payload: false });
  
      dispatch({
        type: "SET_NOTES",
        payload: notes,
      });
    } catch (error) {
      console.error("Error getting notes:", error);
      dispatch({ type: "SET_LOADING", payload: false }); 
      dispatch({ type: "SET_ERROR", payload: error.message }); 
    }
  };
  
