import { createReducer } from "@reduxjs/toolkit";
import { QuestionsData } from "../../data/Questions";


const initialState = {
  questions: QuestionsData,
  currentQuestion: 1,
  answers: [],
  markingScheme: [],
};

export const QuestionReducer = createReducer(initialState, {
  setCurrentQuestion: (state, action) => {
    state.currentQuestion = action.payload;
  },

  initializedAnswerSheet: (state) => {
    let answersArr = state.questions.map((q) => {
      return null;
    });
    return {
      ...state,
      answers: answersArr,
    };
  },

  answerQuestion: (state, action) => {
    let { qn, choice } = action.payload;

    let newAnswers = [...state.answers];
    newAnswers[qn] = choice;
    return {
      ...state,
      answers: newAnswers,
    };
  },

  initializedMakingScheme: (state, action) => {
    state.markingScheme = action.payload;
  },

});
