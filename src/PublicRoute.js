import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/Auth/AuthSelectors';

export const PublicRoute = ({ component: Component, redirectTo = '/user' }) => {
  const { isLoggedIn } = useSelector(selectAuth);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
