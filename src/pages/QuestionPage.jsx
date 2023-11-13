import QuestionHeader from "../components/questions/QuestionHeader";
import QuestionWorkPage from "../components/questions/QuestionPage";
import QuestionNavigation from "../components/questions/QuestionNavigation";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "lottie-react";
import timeUp from "../assets/Timeup.json";

function QuestionPage() {
  const dispatch = useDispatch();
  const { currentTime } = useSelector((state) => state.time);

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
  return (
    <div className="w-full overflow-x-hidden">
      <QuestionHeader />
      <QuestionWorkPage />
      <QuestionNavigation />

      {currentTime === 0 && (
        <div className=" fixed top-0 left-0 h-full w-full bg-[#ffff] backdrop-blur-sm flex justify-center items-center flex-col gap-3">
          <Lottie animationData={timeUp} className="w-full h-[10cm]" />
          <p className=" text-2xl font-bold text-blue-700">Time Up</p>
          <button
            className=" bg-emerald-600 text-white px-10 rounded-2xl py-2"
            onClick={() => handleSubmit()}
          >
            Submit Test
          </button>
        </div>
      )}
    </div>
  );
}

export default QuestionPage;
