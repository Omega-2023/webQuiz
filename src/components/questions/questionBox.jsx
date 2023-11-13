import React from "react";
import { useDispatch, useSelector } from "react-redux";

function QuestionBox({ question, index }) {
  const dispatch = useDispatch();
  const { currentQuestion, answers } = useSelector((state) => state.questions);
  const choices = ["A", "B", "C", "D"];

  const handleSelectAnswer = (answer) => {
    dispatch({
      type: "answerQuestion",
      payload: {
        qn: index,
        choice: answer,
      },
    });
  };
  return (
    <>
      {currentQuestion === index + 1 && (
        <div className="w-full py-10 px-4 bg-white h-full overflow-y-auto">
          <div className=" w-full py-1 flex flex-row gap-2 items-center">
            <span className=" text-[14px] text-gray-600 font-medium">
              Question {index + 1}
            </span>
            <span className=" flex py-1 text-[12px] bg-gray-200 font-light px-4 rounded-lg">
              Flag question
            </span>
          </div>

          <div className=" mt-3 text-gray-600 font-normal px-4 w-full bg-gray-100 py-2 rounded-md">
            {question.question}
          </div>

          <form className="w-full mt-5">
            <div className="flex flex-col gap-1 w-full">
              {question.choices.map((choice, i) => (
                <div className="w-full relative py-1">
                  <label className=" input-container ">
                    <input
                      type="radio"
                      value={choices[i]}
                      onChange={(e) => handleSelectAnswer(e.target.value)}
                      checked={answers[index] === choices[i]}
                      name={`q-[${
                        index * 3 - 2 + question.question.slice(0, 2)
                      }]`}
                      className="absolute radio-option opacity-0"
                    />
                    <div className=" cursor-pointer w-full option-label bg-gray-200 h-full rounded-2xl grid grid-cols-12 py-2 pr-2">
                      <div className=" col-span-2 500px:col-span-1 flex justify-center font-bold items-center mqc">
                        {choices[i]}
                      </div>
                      <div className=" col-span-10 font-normal text-slate-700">
                        {choice}
                      </div>
                    </div>
                  </label>
                </div>
              ))}
            </div>
            <div className=" flex justify-end py-1 w-full px-3">
              <input
                type="reset"
                onClick={() => handleSelectAnswer(null)}
                className=" cursor-pointer mt-5 rounded-xl bg-primary px-4 py-2 font-bold text-white"
                value={"Clear Answer"}
                name={`q-[${index * 3 - 2 + question.question.slice(0, 2)}]`}
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default QuestionBox;
