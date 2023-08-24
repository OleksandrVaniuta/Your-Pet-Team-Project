import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/Auth/AuthSelectors';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useSelector(selectAuth);
  // const isLoggedIn = false;
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
