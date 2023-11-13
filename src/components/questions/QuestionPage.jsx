import QuestionLinkNav from './QuestionLinkNav.jsx'

function QuestionPage() {
  return (
    <div className='w-full h-[90vh] overflow-y-auto grid grid-cols-12'>
       <div className='h-full col-span-2 800px:col-span-1'>
          <QuestionLinkNav />
       </div>
       <div className='h-full bg-blue-400 col-span-10 800px:col-span-11'></div>
    </div>
  )
}

export default QuestionPage