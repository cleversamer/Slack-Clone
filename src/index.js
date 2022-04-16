import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import App from "./App";
import "./css/index.css";

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("app")
);
