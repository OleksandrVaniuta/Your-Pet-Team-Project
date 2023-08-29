import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicRoute } from 'PublicRoute';
import { Layout } from './Layout/Layout';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from '../redux/Auth/AuthOperations';
// import { selectIsRefreshing } from '../redux/Auth/AuthSelectors';
import LoginPage from 'pages/LoginPage/LoginPage';
// import NotiesCategoriesNav from './NoticesCategoriesNav/NotiesCategoriesNav';
import MainPage from 'pages/Mainpage/MainPage';
// import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { NoticesPage } from 'pages/NoticesPage/NoticesPage';
import { PrivateRoute } from 'PriviteRoute';
import { UserPage } from 'pages/UserPage/UserPage';
import { FriendsPage } from '../pages/OurFriendsPage/FriendsPage';
import { AddPetPage } from 'pages/AddPetPage/AddPetPage';
import { selectIsLoggedIn } from 'redux/Auth/AuthSelectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  // const refteshing = useSelector(selectIsRefreshing);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(refresh());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact index element={<MainPage />} />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
          <Route
            path="/login"
            element={<PublicRoute redirectTo="/" component={<LoginPage />} />}
          />
          <Route
            path="notices/"
            element={
              <PublicRoute redirectTo="sell" element={<NoticesPage />} />
            }
          />
          <Route path="notices/:category" element={<NoticesPage />} />
          <Route
            path="/user"
            element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />
          <Route
            path="/friends"
            element={<PublicRoute redirectTo="/" component={<FriendsPage />} />}
          />
          <Route
            path="/add-pet"
            element={
              <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
