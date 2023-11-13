import QuestionHeader from "../components/questions/QuestionHeader";
import QuestionWorkPage from "../components/questions/QuestionPage";
import QuestionNavigation from "../components/questions/QuestionNavigation";

function QuestionPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <QuestionHeader />
      <QuestionWorkPage />
      <QuestionNavigation />
    </div>
  );
}

export default QuestionPage;
