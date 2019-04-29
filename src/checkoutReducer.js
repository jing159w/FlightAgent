import { CHECKOUT } from "./actionTypes";

const initialState = {
  checkout: false
};

function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT:
      return { ...state, checkout: action.value };
    default:
      return state;
  }
}

export default checkoutReducer;
