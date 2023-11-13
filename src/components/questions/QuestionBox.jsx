import React from "react";
import { useSelector } from "react-redux";

export function QuestionBox({ question, index }) {
  const { currentQuestion } = useSelector((state) => state.questions);

  return (
    <>
      {currentQuestion === index + 1 && (
        <div className="w-full py-10 px-4 bg-white">
          <div className=" w-full bg-red-400 py-1 ">
            .
          </div>
          <div>Numbers {index + 1}</div>
          <div>{question.question}</div>
          <form className="w-full">
            <div className="flex flex-col gap-1 w-full">
              {question.choices.map((choice, i) => (
                <input
                  type="radio"
                  name={`q-[${index * 3 - 2 + question.question.slice(0, 2)}]`} />
              ))}
            </div>
            <input
              type="reset"
              name={`q-[${index * 3 - 2 + question.question.slice(0, 2)}]`} />
          </form>
        </div>
      )}
    </>
  );
}
