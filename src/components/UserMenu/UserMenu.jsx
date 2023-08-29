import Logout from 'components/Logout/Logout';
import { Wrapper, UserBox } from './UserMenu.styled';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useWindowSize } from 'hooks/useResize';

const UserMenu = ({ userName, showName, setIsOpen }) => {
  const [screenWidth] = useWindowSize();
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
      {screenWidth > 1279 && <Logout />}
    </UserBox>
  );
};

export default UserMenu;
