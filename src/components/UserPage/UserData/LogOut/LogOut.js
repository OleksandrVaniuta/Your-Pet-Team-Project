import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// import { useLogOutMutation } from 'redux/auth/fetchUser';
import { useNavigate } from 'react-router-dom';
import { LogOutBtn, LogOutBtnComtainer } from './LogOut.styled';
import { logout } from 'redux/Auth/AuthOperations';
import { useDispatch } from 'react-redux';

export default function LogOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    await dispatch(logout());
    navigate('/');
  };

  return (
    <LogOutBtnComtainer>
      <LogOutBtn type="LogOutBtn" onClick={handleLogoutClick}>
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
    </LogOutBtnComtainer>
  );
}
