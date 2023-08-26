import React from 'react';
import { ReactComponent as PlusIcon } from './plus.svg';
import { ReactComponent as CloseIcon } from './close.svg';
import {
  AddPetStyledBtn,
  AddPetStyledBtnMobile,
  AddPetStyledLink,
  AddPetStyledLinkMobile,
} from './NoticesAddPetBtn.styled';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/Auth/AuthSelectors';
import AuthNav from 'components/AuthNav/AuthNav';
import Modal from 'components/Modal/Modal';
import './NoticesAddPetBtn.css';

const NoticesAddPetBtn = () => {
  const isMobileScreen = useMediaQuery('(max-width: 767px)');
  const isLogIn = useSelector(selectIsLoggedIn);
  const [isModalActive, setIsModalActive] = React.useState(false);

  const handleNavLinkClick = () => {
    setIsModalActive(true);
  };

  const handleCloseModal = () => {
    setIsModalActive(false);
  };

  return (
    <>
      {isMobileScreen ? (
        isLogIn ? (
          <AddPetStyledLinkMobile to={'/add-pet'}>
            <PlusIcon />
            <span>Add Pet</span>
          </AddPetStyledLinkMobile>
        ) : (
          <AddPetStyledBtnMobile onClick={handleNavLinkClick}>
            <PlusIcon />
            <span>Add Pet</span>
          </AddPetStyledBtnMobile>
        )
      ) : isLogIn ? (
        <AddPetStyledLink to={'/add-pet'}>
          <span>Add Pet</span>
          <PlusIcon />
        </AddPetStyledLink>
      ) : (
        <AddPetStyledBtn onClick={handleNavLinkClick}>
          <span>Add Pet</span>
          <PlusIcon />
        </AddPetStyledBtn>
      )}
      <Modal isActive={isModalActive} className="custom-modal">
        <div className="modal-content">
          <h2>Attention</h2>
          <p>
            We would like to remind you that certain functionality is available
            only to authorized users. If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </p>
          <AuthNav />
          <CloseIcon onClick={handleCloseModal}>Close</CloseIcon>
        </div>
      </Modal>
    </>
  );
};

export default NoticesAddPetBtn;
