import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Comment from "./Comment";
import './CommentsSection.css';
import Modal from '../Modal/index';
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";

const CommentsSection = ({ comments, project_id }) => {
  const [show, setShow] = useState(false);
  const user = useSelector(state => state.session.user)
  return (
    <div className='comments-container'>
      <div>
        {user ? null : <div className='comments-login-notification flex-center'>You must be logged in to comment</div>}
        <div className='comments-section'>
          {
            comments.map((comment, idx) => {
              return <Comment key={idx} comment={comment} />
            })
          }
        </div>
      </div>
      <div className='comments-right-col'>
        <div className='comments-right-col-info'>
          <p className='comments-right-top-text'>
            This is your space to offer support and feedback. Remember to be constructive—there's a human behind this project.
          </p>
          <p className='comments-right-bottom-text'>
            Have a question for the creator?
          </p>
          <NavLink className='comments-right-link' to={`/projects/${project_id}/faqs`}>Check this project's FAQ</NavLink>
        </div>
        {user &&
          <>
            <button className='comments-btn btn-primary' onClick={() => setShow(true)}>
              Add a comment
            </button>
            <Modal title='Add a comment' onClose={() => setShow(false)} show={show}>
              <CommentForm setShow={setShow} method='POST' />
            </Modal>
          </>
        }

      </div>
    </div>
  )
}

export default CommentsSection;
