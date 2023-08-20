// import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicRoute } from 'PublicRoute';
import { Layout } from './Layout/Layout';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/register"
          element={<PublicRoute redirectTo="/" component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/" component={<LoginPage />} />}
        />
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
