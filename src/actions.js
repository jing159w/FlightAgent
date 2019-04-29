import { SELECT_SEAT, UNSELECT_SEAT, CHECKOUT } from "./actionTypes";

export function selectAction(seat) {
  return {
    type: SELECT_SEAT,
    value: seat
  };
}
export function unSelectAction(seat) {
  return {
    type: UNSELECT_SEAT,
    value: seat
  };
}

export function checkOutAction() {
  return {
    type: CHECKOUT,
    value: true
  };
}
