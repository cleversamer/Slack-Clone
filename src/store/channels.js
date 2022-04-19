import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "channels",
  initialState: {
    list: [],
    selected: null,
  },
  reducers: {
    channelsSet: (channels, action) => {
      channels.list = action.payload.data;
      channels.selected = channels?.list[0] || null;
    },

    channelSelected: (channels, action) => {
      channels.selected = action.payload.data;
    },
  },
});

const { channelsSet, channelSelected } = slice.actions;

// Action creators
export const setChannels = (user) => channelsSet({ data: user });

export const setCurrentChannel = (channel) =>
  channelSelected({ data: channel });

// Selectors
export const selectChannels = createSelector(
  (state) => state.channels,
  (channels) => channels.list
);

export const selectCurrentChannel = createSelector(
  (state) => state.channels,
  (channels) => channels.selected
);

export default slice.reducer;
