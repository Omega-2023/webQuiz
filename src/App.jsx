import QuestionPage from "./pages/QuestionPage.jsx";
import StartPage from "./pages/StartPage.jsx";
import FinishPage from "./pages/FinishPage.jsx";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const { status } = useSelector((state) => state.progress);
  const dispatch = useDispatch();

  if (status === "not started") {
    return <StartPage />;
  }
  if (status === "in progress") {
    dispatch({
      type: "initializedAnswerSheet",
    });
    dispatch({
      type: "initializedMakingScheme",
      payload: ["B", "C", "A", "C", "C", "B", "B", "C", "A", "B"],
    });
    return <QuestionPage />;
  }
  if (status === "finish") {
    return <FinishPage />;
  }
}

export default App;
