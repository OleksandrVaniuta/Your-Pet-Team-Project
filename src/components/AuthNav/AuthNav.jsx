// import { NavLink } from 'react-router-dom';

// export const AuthNav = () => {
//   return (
//     <div>
//       <NavLink to="/login">Log in</NavLink>
//       <NavLink to="/register">Register</NavLink>
//     </div>
//   );
import { ReactComponent as PawPrintIcon } from 'images/icons/pawprint.svg';
import AuthBtn from '../AuthBtn/AuthBtn';
import { List } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <List>
      <li>
        <AuthBtn path="/login" text="Log IN" icon={<PawPrintIcon />} />
      </li>
      <li>
        <AuthBtn path="/register" text="Registration" />
      </li>
    </List>
  );
};

export default AuthNav;
