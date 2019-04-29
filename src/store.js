import { createStore, combineReducers } from "redux";
import checkoutReducer from "./checkoutReducer";
import seatingReducer from "./seatingReducer";

const rootReducer = combineReducers({
  selected: seatingReducer,
  checkout: checkoutReducer
});

const store = createStore(seatingReducer);

export default store;
