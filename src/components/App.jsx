import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicRoute } from 'PublicRoute';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { refresh } from '../redux/Auth/AuthOperations';
import { PrivateRoute } from 'PriviteRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainPage = lazy(() => import('../pages/Mainpage/MainPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const FriendsPage = lazy(() => import('../pages/OurFriendsPage/FriendsPage'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const AddPetPage = lazy(() => import('../pages/AddPetPage/AddPetPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const LocalStoreToken = localStorage.getItem('persist:auth');
    if (JSON.parse(LocalStoreToken)) {
      dispatch(refresh());
    }
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact index element={<MainPage />} />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/user" component={<RegisterPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/user" component={<LoginPage />} />
            }
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
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route
            path="/add-pet"
            element={
              <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
