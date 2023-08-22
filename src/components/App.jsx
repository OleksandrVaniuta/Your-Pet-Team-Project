// import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicRoute } from 'PublicRoute';
import { Layout } from './Layout/Layout';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
// import NotiesCategoriesNav from './NoticesCategoriesNav/NotiesCategoriesNav';
import MainPage from 'pages/Mainpage/MainPage';
import { NoticesPage } from 'pages/NoticesPage/NoticesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact index element={<MainPage />} />
        <Route
          path="/register"
          element={<PublicRoute redirectTo="/" component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/" component={<LoginPage />} />}
        />
        <Route
          path="notices/"
          element={<PublicRoute redirectTo="sell" element={<NoticesPage />} />}
        />
        <Route path="notices/:category" element={<NoticesPage />} />
        {/* <Route index element={<MainPage />} /> */}
        {/* <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} /> */}
        {/* <Route path="login" element={<LoginPage />} /> */}
        {/* </Route> */}
      </Route>
    </Routes>
  );
}

export default App;
