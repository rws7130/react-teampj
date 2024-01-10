import React from 'react';
import { useUserStore } from './store/useUserStore';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/user/LoginPage';
import AdminLogin from './pages/admin/AdminLogin';
import SignupPage from './pages/user/SignupPage';
import { AdminDev1, AdminDev2, AdminDev3, AdminDev4, AdminDev5, AdminDev6 } from 'pages/admin';
import { UserDev1, UserDev2, UserDev3, UserDev4, UserDev5, UserDev6 } from 'pages/user';

function Main() {
  return null;
}

export default function App() {
  console.log(1);
  const user = useUserStore((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={user ? <HomePage /> : <LoginPage />} />
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/admin/main' element={<Main />} />
        <Route path='/admin/dev1' element={<AdminDev1 />} />
        <Route path='/admin/dev2' element={<AdminDev2 />} />
        <Route path='/admin/dev3' element={<AdminDev3 />} />
        <Route path='/admin/dev4' element={<AdminDev4 />} />
        <Route path='/admin/dev5' element={<AdminDev5 />} />
        <Route path='/admin/dev6' element={<AdminDev6 />} />
        <Route path='/user/dev1' element={<UserDev1 />} />
        <Route path='/user/dev2' element={<UserDev2 />} />
        <Route path='/user/dev3' element={<UserDev3 />} />
        <Route path='/user/dev4' element={<UserDev4 />} />
        <Route path='/user/dev5' element={<UserDev5 />} />
        <Route path='/user/dev6' element={<UserDev6 />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
