import React from 'react';
import css from './Modal.module.css';

import { useEffect } from 'react';

function Modal({ isActive, children, closeModal }) {
  
   useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && isActive) {
        closeModal();
      }
    };

    const handleClickOutside = (e) => {
      if (e.target.classList.contains(css.active) && isActive) {
        closeModal();
      }
    };

    if (isActive) {
      document.addEventListener('keydown', handleKeyPress);
      document.addEventListener('click', handleClickOutside);
    }


    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('click', handleClickOutside);
    };
   }, [isActive, closeModal]);
  return <div className={isActive ? css.active : css.modal}>{children}</div>;
}

export default Modal