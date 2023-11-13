import React from "react";
import { useDispatch } from "react-redux";
import Lottie from "lottie-react";
import test from "../assets/test.json";

function StartPage() {
  const dispatch = useDispatch();
  const handleStartQuiz = () => {
    dispatch({
      type: "updateProgress",
      payload: "in progress",
    });
  };

  return (
    <div className="w-full h-[100vh] grid grid-cols-2 py-10 px-3 500px:px-0">
      <div className=" col-span-full 800px:col-span-1 flex flex-col gap-3 justify-center items-center px-3">
        <h1 className=" px-2 text-center text-3xl font-bold text-blue-600">
          Test Your Knowledge with WebQuiz
        </h1>
        <p className=" mt-7 text-center text-gray-600 px-5">
          WebQuiz offers entertaining and educational quizzes on thousands of
          topics to feed your curiosity. Whether you're a trivia buff looking
          for a challenge or just want to casually learn new things, our
          ever-expanding library of quizzes has something for you! Compete with
          friends or other players to see who has the best score.
        </p>
        <button
          className="px-3 py-2 rounded-xl mt-10 text-white font-bold bg-blue-600"
          onClick={() => handleStartQuiz()}
        >
          Start Quizzing Now!
        </button>
      </div>
      <div className="w-full  col-span-full 800px:col-span-1">
        <Lottie animationData={test} />
      </div>
    </div>
  );
}

export default StartPage;
