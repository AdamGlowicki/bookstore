import {combineReducers} from "redux";
import bookReducer from "./bookReducer/duck";

const rootReducer = combineReducers({
  books: bookReducer,
})

export default rootReducer;
