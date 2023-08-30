import React from 'react';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import css from './NoticesCategoriesList.module.css';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import noImageData from './img/no-img.jpg';
// import { useDispatch } from 'react-redux';
import { pawprint } from './img';
import { Link } from 'react-router-dom';

export default function NoticesCategoriesList({ notices }) {
  const [isActiveInfoModal, setIsActiveInfoModal] = useState(false);
  const [isActiveNologModal, setIsActiveNologModal] = useState(false);

  const closeModal = () => {
    if (isActiveInfoModal) {
      setIsActiveInfoModal(false);
    } else {
      setIsActiveNologModal(false);
    }
  };

  return (
    <>
      {notices.length === 0 ? (
        <div className={css.noImg}>
          <img src={noImageData} alt="No Data" />
        </div>
      ) : (
        <ul className={css.categories_list}>
          {notices.map(notice => (
            <NoticeCategoryItem key={notice._id} notice={notice} />
          ))}
        </ul>
      )}
      <Modal isActive={isActiveNologModal} closeModal={closeModal}>
        <div className={css.modal_container_log_reg}>
          <h1 className={css.title_modal}>Attention</h1>
          <p className={css.text_modal}>
            We would like to remind you that certain functionality is available
            only to authorized users. If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </p>
          <div className={css.buttons__container}>
            <Link to="/login" className={css.button_reg_log}>
              Log IN
              <img src={pawprint} alt="img" className={css.icon_modal} />
            </Link>
            <Link
              to="/register"
              className={`${css.button_white} ${css.button_reg_log}`}
            >
              Registration
            </Link>
          </div>
          <button className={css.button_close_modal} onClick={closeModal}>
            <CloseIcon className={css.icon_close} />
          </button>
        </div>
      </Modal>
    </>
  );
}
