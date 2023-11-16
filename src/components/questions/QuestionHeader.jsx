import { HiChevronDown } from "react-icons/hi";
import Timimg from "../timing/timingBox.jsx";
import {} from 'react-icons'

function QuestionHeader() {
  return (
    <div className="h-[1.7cm] bg-dark-700 w-full flex flex-row justify-between items-center px-3">
      <div className=" font-medium text-2xl text-gray-300"> Examplify</div>
      <div className=" text-white">
        N330 A1 Exam 2 FA23- RAYMOND ADJETEY (radjetey)
      </div>

      <div>
        <Timimg />
      </div>
      <div className=" flex flex-row justify-center items-center text-white font-semibold">Exam Control <HiChevronDown size={30} /> </div>

      <div className=" hidden 450px:block font-medium text-2xl text-gray-300">
        {" "}
        ToolKit :{" "}
      </div>
    </div>
  );
}

export default QuestionHeader;
