import QuestionBox from "./questionLink.jsx";
import { useSelector } from "react-redux";

function QuestionLinkNav() {
  const { questions } = useSelector((state) => state.questions);

  return (
    <div className="w-full h-full flex flex-col gap-2 bg-gray-300">
      {questions.map((q, index) => (
        <QuestionBox current={index + 1} />
      ))}
    </div>
  );
}

export default QuestionLinkNav;
