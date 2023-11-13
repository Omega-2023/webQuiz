import QuestionLinkNav from "./QuestionLinkNav.jsx";
import QuestionSpace from "./QuestionSpace.jsx";
function QuestionPage() {
  return (
    <div className="w-full h-[90vh] overflow-y-auto mb-5 grid grid-cols-12">
      <div className="h-full col-span-2 800px:col-span-1">
        <QuestionLinkNav />
      </div>
      <div className="h-full col-span-10 800px:col-span-11">
        <QuestionSpace />
      </div>
    </div>
  );
}

export default QuestionPage;
