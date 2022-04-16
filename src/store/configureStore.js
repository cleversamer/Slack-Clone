/* eslint-disable import/no-anonymous-default-export */
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import thunk from "redux-thunk";

export default function () {
  return configureStore({ reducer, middleware: [thunk] });
}
