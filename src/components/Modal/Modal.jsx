import React from 'react';
import css from './Modal.module.css';

function Modal({isActive, children}) {
  return (
      <div className={isActive ? css.active : css.modal}>
          {children}
      </div>
  )
}

export default Modal