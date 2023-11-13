import QuestionPage from "./pages/QuestionPage.jsx";
import StartPage from "./pages/StartPage.jsx";
import FinishPage from "./pages/FinishPage.jsx";
import "./index.css";
import { useSelector } from "react-redux";
function App() {
  const { status } = useSelector((state) => state.progress);
  
  
  if (status === "not started") {
    return <StartPage />;
  }
  if (status === "in progress") {
    return <QuestionPage />;
  }
  if (status === "finish") {
    return <FinishPage />;
  }
}

export default App;
