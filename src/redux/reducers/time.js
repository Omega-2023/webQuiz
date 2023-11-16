import { createReducer } from "@reduxjs/toolkit";
const initialTime = 6600;
const initialState = {
  currentTime: initialTime,
};

export const TimeReducer = createReducer(initialState, {
  timeOut: (state) => {
    state.currentTime = 0;
  },
  startOver: (state) => {
    state.currentTime = initialTime;
  },
});
