import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function QuestionBox({ current }) {
  const dispatch = useDispatch();
  const { currentQuestion, answers } = useSelector((state) => state.questions);
  let [isAnswered, setAnswered] = useState(false);

  const handleQuestionChange = () => {
    dispatch({
      type: "setCurrentQuestion",
      payload: current,
    });
  };

  useEffect(() => {
    if (answers[current - 1] === null) {
      return setAnswered(false);
    }
    setAnswered(true);
  }, [answers]);

  return (
    <div
      className={` ${
        currentQuestion === current
          ? " bg-gray-400 text-white border-gray-400"
          : isAnswered
          ? " bg-primary border-primary text-white"
          : null
      } my-2 w-[1cm] h-[1cm] 500px:w-[1.2cm] 500px:h-[1.2cm] rounded-full text-[16px] flex justify-center items-center cursor-pointer border-2 `}
      onClick={() => handleQuestionChange()}
    >
      {current}
    </div>
  );
}

export default QuestionBox;
