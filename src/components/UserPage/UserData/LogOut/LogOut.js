import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// import { useLogOutMutation } from 'redux/auth/fetchUser';
// import { useNavigate } from 'react-router-dom';
import { LogOutBtn, LogOutBtnComtainer } from './LogOut.styled';

export default function LogOut() {
  // const [LogOut] = useLogOutMutation();
  // const navigate = useNavigate();

  // const handleLogoutClick = () => {
  //   LogOut();
  //   navigate('/');
  // };

  return (
    <LogOutBtnComtainer>
      <LogOutBtn type="LogOutBtn" onClick={() => {}}>
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
