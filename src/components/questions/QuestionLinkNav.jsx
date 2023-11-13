import QuestionBox from "./questionLink.jsx";
import { useSelector } from "react-redux";

function QuestionLinkNav() {
  const { questions } = useSelector((state) => state.questions);

  return (
    <div className="w-full h-full flex py-2 items-center flex-col gap-2 bg-light-gray">
      <div className="h-full block overflow-y-auto">
        {questions.map((q, index) => (
          <QuestionBox current={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default QuestionLinkNav;
