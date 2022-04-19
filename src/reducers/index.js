import { combineReducers } from "redux";
import productReducer from "./productsReducer";

const rootReducer = combineReducers({
  data: productReducer,
});

export default rootReducer;
