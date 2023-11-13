import React from "react";
import { useDispatch, useSelector } from "react-redux";

function QuestionBox({ current }) {
  const dispatch = useDispatch();
  const { currentQuestion } = useSelector((state) => state.questions);

  const handleQuestionChange = () => {
    dispatch({
      type: "setCurrentQuestion",
      payload: current,
    });
  };

  return (
    <div
      className={` cursor-pointer ${
        current === currentQuestion ? "text-red-400" : null
      }`}
      onClick={() => handleQuestionChange()}
    >
      {current}
    </div>
  );
}

export default QuestionBox;
