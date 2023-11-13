import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  status: "not started",
  enum: ["not started", "in progress", "finish"],
};

export const ProgressReducer = createReducer(initialState, {
  updateProgress: (state, action) => {
    if (state.enum.indexOf(action.payload) === -1) {
      return {
        ...state,
      };
    }
    return {
      ...state,
      status: action.payload,
    };
  },
});
