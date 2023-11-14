import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  currentTime: 3600,
};

export const TimeReducer = createReducer(initialState, {
  timeOut: (state) => {
    state.currentTime = 0;
  },
  startOver: (state) => {
    state.currentTime = 3600;
  },
});
