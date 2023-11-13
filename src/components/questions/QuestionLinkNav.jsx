import QuestionBox from "./QuestionBox.jsx";
import { useSelector } from "react-redux";

function QuestionLinkNav() {
  const { questions } = useSelector((state) => state.questions);
  console.log(questions);
  return (
    <div className="w-full h-full flex flex-col gap-2 bg-gray-300">
      <QuestionBox />
    </div>
  );
}

export default QuestionLinkNav;
