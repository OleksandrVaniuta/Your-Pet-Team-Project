import { Wrapper } from './UserMenu.styled';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const UserMenu = ({ userName, showName, setIsOpen }) => {
  return (
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
  );
};

export default UserMenu;
