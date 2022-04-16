import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "user",
  initialState: {
    body: null,
  },
  reducers: {
    userAuthenticated: (user, action) => {
      user.body = action.payload.data;
    },
  },
});

const { userAuthenticated } = slice.actions;

// Action creators
export const authenticateUser = (user) => userAuthenticated({ data: user });

// Selectors
export const selectUser = createSelector(
  (state) => state.user,
  (user) => user.body
);

export default slice.reducer;
