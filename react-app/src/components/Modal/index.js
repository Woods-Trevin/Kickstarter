import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const Modal = ({ show, onClose, title, children }) => {
  if (!show) {
    return null
  }

  //createPortal will take the first argument and render it as a child of the second argument
  //We render the modal as a direct child of the root node so it layered ontop of every other element. Prevents the modal from breaking because of other elements.
  return createPortal(
    <div className='modal' onClick={onClose}>
      <div className='modal-content' onClick={e => e.stopPropagation()}> {/* Stop propagation prevents the modal from closing if you click the modal itself*/}
        <div className='modal-header'>
          <h4 className='modal-title'>{ title }</h4>
        </div>
        <div className='modal-body'>
          { children }
        </div>
      </div>
    </div>,
    document.getElementById('root')
  )
}

export default Modal;
