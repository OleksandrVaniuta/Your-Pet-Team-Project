import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  // selectIsLoggedIn,
  // selectIsRefreshing,
  selectAuth,
} from 'redux/Auth/AuthSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useSelector(selectAuth);
  // const {isRefreshing} = useSelector(selectIsRefreshing);
  // const shouldRedirect = !isLoggedIn && !isRefreshing;
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
