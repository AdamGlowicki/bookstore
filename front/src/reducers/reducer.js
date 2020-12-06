import {combineReducers} from "redux";
import bookReducer from "./bookReducer/duck";
import cartReducer from './cartReducer/duck';
import alertReducer from './alertReducer/duck';

const rootReducer = combineReducers({
  books: bookReducer,
  cart: cartReducer,
  alert: alertReducer,
})

export default rootReducer;
