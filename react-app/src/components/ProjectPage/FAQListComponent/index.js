import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import * as FAQActions from '../../../store/faq'

import './FAQListComponent.css'


export default function FAQListComponent({ FAQQuestion, FAQAnswer, FAQId, setFAQListRender, setFAQRender }) {
    const dispatch = useDispatch()
    const { faqs } = useSelector(state => state.project)

    const currentFAQ = faqs.find(faq => faq.id === FAQId)
    console.log(currentFAQ)

    const [faqQuestion, setfaqQuestion] = useState(currentFAQ.question)
    const [faqAnswer, setfaqAnswer] = useState("")



    function handlePatch(e) {
        e.preventDefault()
        const payload = {
            idx: currentFAQ.id,
            question: faqQuestion,
            answer: faqAnswer,
        }
        console.log(faqQuestion)
        console.log(faqAnswer)
        dispatch(FAQActions.patchFAQ(payload))
        setFAQRender(true)
        setFAQListRender(false)

    }

    return (
        <div className="FAQList_outmost_ctnr" >
            <div className="FAQList_innermost_ctnr">
                <form onSubmit={handlePatch}>
                    <div className="FAQ_Question_TF">
                        <label className="questionLabel_ctnr">
                            Question:
                            <input
                                type="text"
                                name="question"
                                value={faqQuestion}
                                placeholder=""
                                className="FAQ_question"
                                onChange={(e) => setfaqQuestion(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="FAQ_Answer_TF">
                        <label className="answerLabel_ctnr">
                            Answer:
                            <input
                                type="text"
                                name="answer"
                                value={faqAnswer}
                                placeholder="Answer This Question"
                                className="FAQ_answer"
                                onChange={(e) => setfaqAnswer(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="FAQList_btn_ctnr">
                        <div className="editBtn_container">
                            <button type="submit" className="FAQ_editBtn" >
                                Edit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}