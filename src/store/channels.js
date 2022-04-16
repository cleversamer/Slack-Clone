import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "channels",
  initialState: {
    list: null,
  },
  reducers: {
    channelsSet: (channels, action) => {
      channels.list = action.payload.data;
    },
  },
});

const { channelsSet } = slice.actions;

// Action creators
export const setChannels = (user) => channelsSet({ data: user });

// Selectors
export const selectChannels = createSelector(
  (state) => state.channels,
  (channels) => channels.list
);

export default slice.reducer;
