import { Route, Router, Routes } from "react-router-dom";
import LoginPage from "./pages/user/LoginPage";
import SignupPage from "./pages/user/SignupPage";
import HomePage from "./pages/HomePage";
import AdminLogin from "./pages/admin/AdminLogin";
import Main from "./pages/admin/main/MainPage";
import Dev1 from "./pages/admin/dev1/Dev1";
import Dev2 from "./pages/admin/dev2/Dev2";
import Dev3 from "./pages/admin/dev3/Dev3";
import Dev4 from "./pages/admin/dev4/Dev4";
import Dev5 from "./pages/admin/dev5/Dev5";
import Dev6 from "./pages/admin/dev6/Dev6";
import { useUserStore } from "./store/useUserStore";

export function App() {
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
