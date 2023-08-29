import React, { useState } from 'react';
import { ReactComponent as PlusIcon } from './plus.svg';
import { ReactComponent as CloseIcon } from './close.svg';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/Auth/AuthSelectors';
import AuthNav from 'components/AuthNav/AuthNav';
import Modal from 'components/Modal/Modal';
import css from './NoticesAddPetBtn.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const NoticesAddPetBtn = () => {
  const isMobileScreen = useMediaQuery('(max-width: 767px)');
  const isLogIn = useSelector(selectIsLoggedIn);
  const [isModalActive, setIsModalActive] = useState(false);

  const location = useLocation();

  const handleNavLinkClick = () => {
    setIsModalActive(true);
  };

  const handleCloseModal = () => {
    setIsModalActive(false);
  };

  const closeModal = () => {
    if (isModalActive) {
      setIsModalActive(false);
    } else {
      setIsModalActive(false);
    }
  };

  return (
    <>
      {isMobileScreen ? (
        isLogIn ? (
          <NavLink
            className={css.navLinkMobile}
            to={'/add-pet'}
            state={{ from: location }}
          >
            <PlusIcon />
            <span>Add Pet</span>
          </NavLink>
        ) : (
          <button className={css.buttonMobile} onClick={handleNavLinkClick}>
            <PlusIcon />
            <span>Add Pet</span>
          </button>
        )
      ) : isLogIn ? (
        <NavLink
          className={css.navLinkDesktop}
          to={'/add-pet'}
          state={{ from: location }}
        >
          <span>Add Pet</span>
          <PlusIcon />
        </NavLink>
      ) : (
        <button className={css.buttonDesktop} onClick={handleNavLinkClick}>
          <span>Add Pet</span>
          <PlusIcon />
        </button>
      )}
      <Modal
        isActive={isModalActive}
        closeModal={closeModal}
        className={css.customModal}
      >
        <div className={css.modalContent}>
          <h2>Attention</h2>
          <p>
            We would like to remind you that certain functionality is available
            only to authorized users. If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </p>
          <AuthNav />
          <CloseIcon className={css.modalContentSvg} onClick={handleCloseModal}>
            Close
          </CloseIcon>
        </div>
      </Modal>
    </>
  );
};

export default NoticesAddPetBtn;
