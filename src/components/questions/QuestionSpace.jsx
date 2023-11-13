import { useSelector } from "react-redux";
import QuestionBox from "./questionBox.jsx";

function QuestionSpace() {
  const { questions } = useSelector((state) => state.questions);

  return (
    <div className=" w-full h-full overflow-x-hidden overflow-y-auto">
      {questions.map((MCQ, index) => (
        <QuestionBox question={MCQ} index={index} />
      ))}
    </div>
  );
}

export default QuestionSpace;
