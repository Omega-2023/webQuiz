import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  currentTime: 10,
};

export const TimeReducer = createReducer(initialState, {
  updateTime: (state) => {
    state.currentTime = 0;
  },
});
