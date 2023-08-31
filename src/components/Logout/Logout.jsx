import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/Auth/AuthOperations';
import { useNavigate } from 'react-router-dom';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import ApproveAction from '../ApproveAction/ApproveAction';
import { LogoutButton } from './Logout.styled';

const Logout = ({ setIsOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const handlerClick = async () => {
    await dispatch(logout());
    navigate('/');
    setIsOpen(false);
  };

  return (
    <>
      <LogoutButton onClick={toggleModal} type="button">
        <LogoutOutlinedIcon />
        Log out
      </LogoutButton>
      {isModalOpen && (
        <ModalLogout toggleModal={toggleModal}>
          <ApproveAction
            toggleModal={toggleModal}
            type="button"
            clickHandler={handlerClick}
            icon={<LogoutOutlinedIcon />}
          >
            Already leaving?
          </ApproveAction>
        </ModalLogout>
      )}
    </>
  );
};
export default Logout;
