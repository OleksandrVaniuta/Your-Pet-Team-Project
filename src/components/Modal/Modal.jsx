import React from 'react';
import css from './Modal.module.css';

function Modal({isActive, closeModal, children}) {
  return (
      <div className={isActive ? css.active : css.modal} onClick={closeModal}>
          {children}
      </div>
  )
}

export default Modal