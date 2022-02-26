import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import combinedReducers from "./redux/reducers";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(combinedReducers)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
