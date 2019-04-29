import React, { PureComponent } from "react";
import "./style.css";

export default class FlightSeat extends PureComponent {
  render() {
    const { onClick, text, selected } = this.props;
    const classes = "seat " + (selected ? " highlight" : "");

    return (
      <div className={classes} onClick={() => onClick(text)}>
        {this.props.text}
      </div>
    );
  }
}
