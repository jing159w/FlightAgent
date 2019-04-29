import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "./style.css";
import { selectAction, unSelectAction } from "./actions";

class SeatingSummary extends PureComponent {
  render() {
    let content = [
      <div>
        <b>Seats Selected: </b>
      </div>
    ];
    this.props.selected.forEach(e => {
      content.push(
        <div className="summary-item">{"Row " + e[0] + ", Seat " + e[1]}</div>
      );
    });
    console.log(this.props.selected);
    return <div className="seating-summary">{content}</div>;
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
)(SeatingSummary);
