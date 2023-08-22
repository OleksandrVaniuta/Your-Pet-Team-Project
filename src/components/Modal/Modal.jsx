import React from 'react';
import css from './Modal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { activeAction } from 'redux/Modal/ModalSlice';

function Modal({children}) {
    const dispatch = useDispatch();
    const activeState = useSelector(state => state.active);
    const onClickModal = () => {
        dispatch(activeAction(false));
        document.body.style.overflow = 'auto';
    }
  return (
      <div className={activeState ? css.active : css.modal} onClick={onClickModal}>
          {children}
      </div>
  )
}

export default Modal