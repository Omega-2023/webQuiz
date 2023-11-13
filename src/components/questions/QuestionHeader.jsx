import Timimg from "../timing/timingBox.jsx";

function QuestionHeader() {
  return (
    <div className="h-[1.7cm] bg-gray-600 w-full flex flex-row justify-between items-center px-3">
      <div className=" font-medium text-2xl text-gray-300"> Examplify</div>
      <div>
        <Timimg />
      </div>
      <div className=" hidden 450px:block font-medium text-2xl text-gray-300"> ToolKit : </div>
    </div>
  );
}

export default QuestionHeader;
