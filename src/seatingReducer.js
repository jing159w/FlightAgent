import { SELECT_SEAT, UNSELECT_SEAT, CHECKOUT } from "./actionTypes";

const initialState = {
  selected: [],
  checkout: false
};

function seatingReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_SEAT:
      return { ...state, selected: [...state.selected, action.value] };
    case UNSELECT_SEAT:
      return {
        ...state,
        selected: state.selected.filter(e => e !== action.value)
      };
    case CHECKOUT:
      return {
        ...state,
        checkout: action.value
      };
    default:
      return state;
  }
}

export default seatingReducer;
