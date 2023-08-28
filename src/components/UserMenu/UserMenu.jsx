import Logout from 'components/Logout/Logout';
import { Wrapper, UserBox } from './UserMenu.styled';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const UserMenu = ({ userName, showName, setIsOpen }) => {
  return (
    <UserBox>
      <Wrapper to="/user" onClick={() => setIsOpen(false)}>
        <AccountCircleOutlinedIcon
          sx={[
            {
              fontSize: 28,
              color: '#FFC107',
              cursor: 'pointer',
            },
            { '&:hover': { color: '#ffffff' } },
          ]}
        />
        {showName && userName}
      </Wrapper>
      <Logout />
    </UserBox>
  );
};

export default UserMenu;
