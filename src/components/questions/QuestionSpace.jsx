import React from "react";

function QuestionSpace() {
  return (
    <div className=" w-full h-full">
      <div>Question Numbers</div>
      <div>Question Qestion</div>
      <form className="w-full">
        <div className="flex flex-col gap-1 w-full">
          <input type="radio" name="q-[]" />
        </div>
        <input type="reset" name="q-[]" />
      </form>
    </div>
  );
}

export default QuestionSpace;
