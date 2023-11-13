import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  currentTime: 1800,
};

export const TimeReducer = createReducer(initialState, {
  timeOut: (state) => {
    state.currentTime = 0;
  },
  startOver: (state) => {
    state.currentTime = 1800;
  },
});
