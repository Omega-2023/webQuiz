import QuestionHeader from "../components/questions/QuestionHeader";
import QuestionWorkPage from "../components/questions/QuestionPage";
import QuestionNavigation from "../components/questions/QuestionNavigation";
import { useDispatch, useSelector } from "react-redux";

function QuestionPage() {
  const dispatch = useDispatch();
  const { currentTime } = useSelector((state) => state.time);

  const handleSubmit = () => {
    dispatch({
      type: "updateProgress",
      payload: "finish",
    });
  };
  return (
    <div className="w-full overflow-x-hidden">
      <QuestionHeader />
      <QuestionWorkPage />
      <QuestionNavigation />

      {currentTime === 0 && (
        <div className=" fixed top-0 left-0 h-full w-full bg-transparent backdrop-blur-sm flex justify-center items-center flex-col gap-3">
          Time out
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default QuestionPage;
