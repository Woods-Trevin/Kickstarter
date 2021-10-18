import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as FAQActions from '../../../store/faq';
import './FAQ.css';

function FAQpage({ faq, setFAQListRender, setFAQRender, setFAQId }) {
  const dispatch = useDispatch();
  const [hide, setHide] = useState(true);

  const currentUserId = useSelector(state => state.session)

  function toggleHide() {
    if (hide) {
      setHide(false);
    } else {
      setHide(true)
    }
  }

  const [user, setUser] = useState(false)


  useEffect(() => {
    if (currentUserId.user?.id === faq.user_id) {
      setUser(true);
    } else {
      setUser(false)
    }

  }, [])


  function handleDelete(e) {

    dispatch(FAQActions.deleteFAQ({ idx: faq.id }))

  }

  return (
    <div className="question-container" onClick={() => toggleHide()}>
      <div className="question-preview">
        <div className="question">{faq.question}</div>
        <div className="arrow">{'>'}</div>
      </div>
      <div className={hide ? "hide" : ""}>
        <div className="FAQWindow_bottom">
          {faq.answer}
          { }
          <div className="FAQBtns_ctnr">
            {user && <li className="FAQPage_editBtn" onClick={() => {
              setFAQId(faq.id)
              setFAQRender(false)
              setFAQListRender(true)
            }} >
              edit
            </li>}
            {user && <li className="FAQPage_deleteBtn" onClick={() => handleDelete()} >
              delete
            </li>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQpage
