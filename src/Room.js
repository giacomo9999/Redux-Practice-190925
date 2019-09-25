import React, { Component } from "react";
import { connect } from "react-redux";

class Room extends Component {
  flipLight = () => {
    this.props.dispatch({ type: "FLIPLIGHT" });
  };

  render() {
    const lightedness = this.props.isLightOn ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={this.flipLight}>flip</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLightOn: state.isLightOn
  };
}

export default connect(mapStateToProps)(Room);
