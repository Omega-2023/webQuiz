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
    dispatch({
      type: "setCurrentQuestion",
      payload: 1,
    });
    dispatch({
      type: "startOver",
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
    <div className="w-full bg-light-primary h-[1.5cm] fixed bottom-0 left-0 flex flex-row justify-end gap-3 px-3 items-center">
      <div>
        <button
          onClick={() => handlePrevQuestion()}
          className={`disabled:opacity-20 px-4 rounded-md text-white font-medium bg-gray-700 py-2`}
          disabled={currentQuestion === 1}
        >
          Previous
        </button>
      </div>
      <button
        onClick={() => handleNextQuestion()}
        className={`disabled:opacity-20 px-4 rounded-md text-white font-medium py-2 capitalize ${
          currentQuestion / totalQuestions === 1
            ? " bg-emerald-600"
            : "bg-primary "
        }`}
      >
        {currentQuestion / totalQuestions === 1 ? "submit" : "next"}
      </button>
    </div>
  );
}

export default QuestionNavigation;
