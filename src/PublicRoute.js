import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/Auth/AuthSelectors';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
