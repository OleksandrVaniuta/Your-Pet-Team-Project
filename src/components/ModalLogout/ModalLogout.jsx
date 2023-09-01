import { useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/Close';
import { Backdrop, ModalWindow, CloseBtn } from './ModalLogout.styled';

const modalContainer = document.getElementById('modal-root');

const ModalLogout = ({ toggleModal, children }) => {
  const location = useLocation();
  const inNoticePage = location.pathname.includes('notices');

  useEffect(() => {
    const onKeyDown = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [toggleModal]);

  const onModalOpen = event => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <>
      <Backdrop onClick={onModalOpen} inNoticePage={inNoticePage}>
        <ModalWindow>
          <CloseBtn type="button" onClick={toggleModal}>
            <CloseOutlinedIcon
              sx={[
                {
                  fontSize: 24,
                  color: '#54ADFF',
                  verticalAlign: 'middle',
                },
              ]}
            />
          </CloseBtn>
          {children}
        </ModalWindow>
      </Backdrop>
    </>,
    modalContainer
  );
};

export default ModalLogout;
