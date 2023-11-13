import Lottie from "lottie-react";
import React from "react";
import ana from "../assets/analysiz.json";
import { useDispatch, useSelector } from "react-redux";

function FinishPage() {
  const dispatch = useDispatch();
  const { markingScheme, answers, questions } = useSelector(
    (state) => state.questions
  );

  const calculateScore = () => {
    let scores = 0;
    for (let i = 0; i < questions.length; i++) {
      if (markingScheme[i] === answers[i]) {
        scores++;
      }
    }

    return scores;
  };

  let scores = calculateScore();

  const restart = () => {
    dispatch({
      type: "updateProgress",
      payload: "in progress",
    });
    dispatch({
      type: "initializedAnswerSheet",
    });
    dispatch({
      type: "initializedAnswerSheet",
    });
  };

  const exit = () => {
    dispatch({
      type: "updateProgress",
      payload: "not started",
    });
    dispatch({
      type: "initializedAnswerSheet",
    });
  };

  return (
    <div className="w-full h-[100vh] grid grid-cols-2 py-10 px-3 500px:px-0">
      <div className=" order-1 col-span-full 800px:col-span-1 flex flex-col gap-3 justify-center items-center px-3">
        <h1 className=" px-2 text-center text-3xl font-bold text-blue-600">
          ANALYSIS
        </h1>
        <div className="flex flex-col w-[5cm] border border-primary py-1">
          <span className="text-[15px] px-2 font-medium text-gray-600">
            SCORE
          </span>
          <span className="text-7xl px-2 font-medium text-blue-500 text-center">
            {(scores / questions.length) * 100}%
          </span>
        </div>
        <div className=" flex flex-row flex-wrap gap-3 justify-center">
          <div className="flex flex-col w-[5cm] border border-primary py-1">
            <span className="text-[15px] px-2 font-medium text-gray-600">
              CORRECT ANSWERS
            </span>
            <span className="text-7xl px-2 font-medium text-emerald-500 text-center">
              {scores}
            </span>
          </div>
          <div className="flex flex-col w-[5cm] border border-primary py-1">
            <span className="text-[15px] px-2 font-medium text-gray-600">
              WRONG ANSWERS
            </span>
            <span className="text-7xl px-2 font-medium text-red-500 text-center">
              {questions.length - scores}
            </span>
          </div>
        </div>
        <div className=" flex flex-row flex-wrap gap-3 justify-center">
          <button
            className="px-10 py-2 rounded-xl mt-10 text-white font-bold bg-blue-600"
            onClick={() => restart()}
          >
            Take Again
          </button>
          <button
            className="px-10 py-2 rounded-xl mt-10 text-blue-600 font-bold border-blue-600 border-2"
            onClick={() => exit()}
          >
            Exit
          </button>
        </div>
      </div>
      <div className="w-full  col-span-full 800px:col-span-1 order-1">
        <Lottie animationData={ana} />
      </div>
    </div>
  );
}

export default FinishPage;
