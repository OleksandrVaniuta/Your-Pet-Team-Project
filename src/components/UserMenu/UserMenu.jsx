import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
  return (
    <div>
      <button type="buttom">logOut</button>
      <NavLink to="/user">User</NavLink>
    </div>
  );
};
