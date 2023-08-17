import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/main">logo</NavLink>
      <NavLink to="/news">news</NavLink>
      <NavLink to="/notices">Find Pet</NavLink>
      <NavLink to="/friends">Our Friends</NavLink>
    </nav>
  );
};
