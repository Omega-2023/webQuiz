import Links from "./questionLink.jsx";
import { useSelector } from "react-redux";

function QuestionLinkNav() {
  const { questions } = useSelector((state) => state.questions);

  return (
    <div className="w-full h-full flex py-2 items-center flex-col gap-2 bg-light-gray">
      <div className=" font-medium">{` Filter >`}</div>
      <div className="h-[90%] block overflow-y-auto pb-20">
        {questions.map((q, index) => (
          <Links current={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default QuestionLinkNav;
