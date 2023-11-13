import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function QuestionNavigation() {
  const dispatch = useDispatch();
  const { currentQuestion, questions } = useSelector(
    (state) => state.questions
  );

  const totalQuestions = questions.length;

  const handlePrevQuestion = () => {
    if (currentQuestion === 1) {
      return null;
    }
    dispatch({
      type: "setCurrentQuestion",
      payload: currentQuestion - 1,
    });
  };

  const handleSubmit = () => {
    dispatch({
      type: "updateProgress",
      payload: "finish",
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion / totalQuestions === 1) {
      return handleSubmit();
    }
    dispatch({
      type: "setCurrentQuestion",
      payload: currentQuestion + 1,
    });
  };

  return (
    <div className="w-full bg-blue-400 h-[1.5cm] fixed bottom-0 left-0 flex flex-row justify-end gap-3 px-3">
      <button
        onClick={() => handlePrevQuestion()}
        className={`disabled:opacity-20`}
        disabled={currentQuestion === 1}
      >
        prev
      </button>
      <button onClick={() => handleNextQuestion()}>
        {currentQuestion / totalQuestions === 1 ? "submit" : "next"}
      </button>
    </div>
  );
}

export default QuestionNavigation;
