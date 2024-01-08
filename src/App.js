import "./App.css";
import LoginPage from "./client/components/login/LoginPage";
import HomePage from "./client/components/main/HomePage";
import { useUserStore } from "./client/store/useUserStore";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./admin/AdminLogin";

export default function App() {
  const user = useUserStore((state) => state.user);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <HomePage /> : <LoginPage />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}
