import React from "react";
import { useDispatch } from "react-redux";

function StartPage() {
    const dispatch = useDispatch()
    const handleStartQuiz = ()=>{
        dispatch({
            type: 'updateProgress',
            payload: 'in progress'
        })
    }
    
  return (
    <div className="w-full bg-red-400 h-[100vh] flex justify-center items-center">
      <button onClick={()=> handleStartQuiz()}>Start Quiz</button>
    </div>
  );
}

export default StartPage;
