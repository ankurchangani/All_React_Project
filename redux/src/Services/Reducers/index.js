import { combineReducers } from "redux";
import adminReducer from "./admin";
import reducerCounter from "./Reducercounter"; 

const rootReducer = combineReducers({
  admin: adminReducer,
  reducerCounter ,
});

export default rootReducer;
