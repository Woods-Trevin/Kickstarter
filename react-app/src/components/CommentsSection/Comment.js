import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Comment.css';
import { deleteComment } from "../../store/comment";
import Modal from "../Modal";
import CommentForm from "./CommentForm";

const Comment = ({ comment }) => {
  const user = useSelector(state => state.session.user)
  const [show, setShow] = useState(false);
  const commentUserId = comment.user_id;
  const dispatch = useDispatch();

  const onDelete = async e => {
    e.preventDefault()
    await dispatch(deleteComment(comment.id))
  }

  const onPatch = async e => {
    e.preventDefault()
    setShow(true);
  }

  return (
    <div className='comment-container'>
      <div className='comment-header'>
        <div className='comment-profile'>
          👤
        </div>
        <div className='comment-info'>
          <span>{comment.username}</span>
          <time className='comment-time'>30 minutes ago</time>
        </div>
        {
          user?.id === commentUserId &&
          <div className='comment-buttons'>
            <button className='btn-edit comment-edit' onClick={onPatch}>Edit</button>
            <button className='btn-delete comment-delete' onClick={onDelete}>Delete</button>
          </div>
        }
      </div>
      <div className='comment-description'>
        {comment.description}
      </div>
      <Modal title='Update your comment' onClose={() => setShow(false)} show={show}>
        <CommentForm setShow={setShow} comment_user_id={commentUserId} comment_id={comment.id} method='PATCH'/>
      </Modal>
    </div>
  )
}
export default Comment;
