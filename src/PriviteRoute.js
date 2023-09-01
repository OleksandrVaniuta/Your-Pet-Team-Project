import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsRefreshing, selectAuth } from 'redux/Auth/AuthSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useSelector(selectAuth);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
