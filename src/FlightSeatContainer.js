import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import FlightSeat from "./FlightSeat";

import { selectAction, unSelectAction } from "./actions";
const alphas = ["A", "B", "C", "D", "E"];

class FlightSeatContainer extends Component {
  onClick(e) {
    const { selected, select, unselect } = this.props;
    if (selected.includes(e)) {
      unselect(e);
    } else {
      select(e);
    }
  }

  render() {
    const { selected } = this.props;

    let seats = [];
    for (let i = 1; i < 9; i++) {
      for (let j = 0; j < 5; j++) {
        seats.push(
          <FlightSeat
            key={i + alphas[j]}
            text={i + alphas[j]}
            onClick={e => this.onClick(e)}
            selected={selected.includes(i + alphas[j])}
          />
        );
      }
    }

    return <div className="flight-seatings">{seats}</div>;
  }
}

const mapStateToProps = state => ({
  selected: state.selected
});

const mapDispatchToProps = dispatch => ({
  select: seat => dispatch(selectAction(seat)),
  unselect: seat => dispatch(unSelectAction(seat))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightSeatContainer);
