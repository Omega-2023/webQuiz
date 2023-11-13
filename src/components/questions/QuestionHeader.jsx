import Timimg from "../timing/timingBox.jsx";

function QuestionHeader() {
  return (
    <div className="h-[1.7cm] bg-gray-600 w-full flex flex-row justify-between items-center px-3">
      <div> Examplify</div>
      <div> 
      <Timimg />
      </div>
      <div> ToolKit</div>
    </div>
  );
}

export default QuestionHeader;
