import { useState } from 'react';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// import { useLogOutMutation } from 'redux/auth/fetchUser';
import { useNavigate } from 'react-router-dom';
import { LogOutBtn, LogOutBtnComtainer } from './LogOut.styled';
import { logout } from 'redux/Auth/AuthOperations';
import { useDispatch } from 'react-redux';

// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import ApproveAction from '../../../ApproveAction/ApproveAction';

export default function LogOut() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const handleLogoutClick = async () => {
    await dispatch(logout());
    navigate('/');
  };

  return (
    <LogOutBtnComtainer>
      <LogOutBtn type="LogOutBtn" onClick={toggleModal}>
        <LogoutOutlinedIcon
          sx={[
            {
              fontSize: 24,
              color: '#54ADFF',
              verticalAlign: 'middle',
              transform: 'rotate(180deg)',
              marginRight: '12px',
            },
          ]}
        />
        <span>Log Out</span>
      </LogOutBtn>
      {isModalOpen && (
        <ModalLogout toggleModal={toggleModal}>
          <ApproveAction
            toggleModal={toggleModal}
            type="button"
            clickHandler={handleLogoutClick}
            icon={<LogoutOutlinedIcon />}
          >
            Already leaving?
          </ApproveAction>
        </ModalLogout>
      )}
    </LogOutBtnComtainer>
  );
}
