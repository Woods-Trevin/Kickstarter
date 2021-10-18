import FAQpage from './FAQpage';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import * as FAQActions from '../../../store/faq'
import './FAQ.css';

function FAQ({ faqs, setFAQRender, setFAQListRender, setFAQAnswer, setFAQQuestion, setFAQId, FAQId }) {
  const dispatch = useDispatch()
  const [renderTF, setRenderTF] = useState(false)
  const [question, setQuestion] = useState("")
  const [askedQuestion, setAskedQuestion] = useState(false)
  const currentProject = useSelector(state => state.project.id)
  const currentUserId = useSelector(state => state.session.user?.id)
  console.log(currentUserId)

  const currentProjFAQs = faqs?.filter(faq => faq.project_id === currentProject)
  console.log(currentProjFAQs)

  const { id, user_id } = useSelector(state => state.project)

  useEffect(() => {
    setAskedQuestion(false)
    setRenderTF(false)
  }, [dispatch])


  function handleSubmit(e) {
    e.preventDefault()
    const payload = {
      question: question,
      project_id: id,
      user_id: currentUserId,
    }
    dispatch(FAQActions.createFAQ(payload))
    setAskedQuestion(true)
    setRenderTF(false)

  }

  return (
    <div className="component-container">
      <div className="faq-left">
        <h2 className="component-header">Frequently Asked Questions</h2>
        <div className="faq-container">
          {currentProjFAQs?.map((faq, idx) =>
            <FAQpage key={`faq ${idx}`} faq={faq} setFAQAnswer={setFAQAnswer} setFAQQuestion={setFAQQuestion} setFAQRender={setFAQRender} setFAQListRender={setFAQListRender} setFAQId={setFAQId} FAQId={FAQId} />
          )}
        </div>
      </div>
      <div className="faq-right">
        <span>Don't see the answer to your question?</span>
        <div>
          <button onClick={() => {
            setRenderTF(true);
            setAskedQuestion(false);
          }}>
            Ask a question
          </button>
        </div>
        {renderTF &&
          <form onSubmit={handleSubmit}>
            <div className="faq-input-ctnr">
              <textarea
                type="text"
                name="question"
                value={question}
                placeholder="Ask Your Question"
                className="questionTF"
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            <button type="submit" className="question-btn" > Ask </button>
          </form>
        }
        {askedQuestion &&
          <li>We will review your question!</li>
        }
        {askedQuestion &&
          <li>Check back later to see the answer!</li>
        }
      </div>
    </div >
  )
}

export default FAQ;
