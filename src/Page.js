import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import { checkOutAction } from "./actions";
import FlightSeatContainer from "./FlightSeatContainer";
import SeatingSummary from "./SeatingSummary";

class Page extends Component {
  render() {
    const { checkout, isCheckOut } = this.props;
    const pageClass = isCheckOut ? "checkout-page" : "select-page";
    return (
      <div>
        <div className="title">
          <label>
            <b>Flight Agent</b>
          </label>
          <label>{Date()}</label>
        </div>
        <div className={pageClass}>
          <FlightSeatContainer />
          <SeatingSummary />
        </div>
        <div className="title" style={{ marginTop: "50px" }}>
          <button className="checkout-button" onClick={() => checkout()}>
            Check Out
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isCheckOut: state.checkout
});

const mapDispatchToProps = dispatch => ({
  checkout: () => dispatch(checkOutAction(true))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
