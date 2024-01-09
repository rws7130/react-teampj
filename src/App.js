import "./App.css";
import LoginPage from "./client/components/login/LoginPage";
import HomePage from "./client/components/main/HomePage";
import { useUserStore } from "./store/useUserStore";
import Main from "./admin/main/MainPage";

import Dev1 from "./admin/dev1/Dev1";
import Dev2 from "./admin/dev2/Dev2";
import Dev3 from "./admin/dev3/Dev3";
import Dev4 from "./admin/dev4/Dev4";
import Dev5 from "./admin/dev5/Dev5";
import Dev6 from "./admin/dev6/Dev6";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./admin/AdminLogin";
import SignupPage from "./client/components/login/SignupPage";

export default function App() {
  console.log(1);
  const user = useUserStore((state) => state.user);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <HomePage /> : <LoginPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/main" element={<Main />} />
        <Route path="/admin/dev1" element={<Dev1 />} />
        <Route path="/admin/dev2" element={<Dev2 />} />
        <Route path="/admin/dev3" element={<Dev3 />} />
        <Route path="/admin/dev4" element={<Dev4 />} />
        <Route path="/admin/dev5" element={<Dev5 />} />
        <Route path="/admin/dev6" element={<Dev6 />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
