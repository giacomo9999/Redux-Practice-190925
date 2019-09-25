import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Room from "./Room";
import "./index.css";

const initialState = {
  isLightOn: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "FLIPLIGHT":
      return {
        isLightOn: !state.isLightOn
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Room />
  </Provider>,
  document.getElementById("root")
);
