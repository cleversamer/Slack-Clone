import { combineReducers } from "@reduxjs/toolkit";
import channels from "./channels";
import user from "./user";

export default combineReducers({
  channels,
  user,
});
