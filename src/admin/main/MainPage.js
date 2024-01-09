import React, { useEffect } from "react";
import { useUserStore } from "../../store/useUserStore";
import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import AdminEditor from "../../common/AdminEditor";

const MainPage = () => {
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    const refreshToken = secureLocalStorage.getItem("refreshToken");
    if (refreshToken) {
      useUserStore.getState().setRefreshToken(refreshToken);
    }
  }, []);

  return (
    <div>
      <h1>어드민 메인 </h1>
      <h2>{user?.email}</h2>
      <Link to="/">유저 홈 이동</Link>
      <div>
        <Link to="/admin/dev1">Dev1</Link>
        <Link to="/admin/dev2">Dev2</Link>
        <Link to="/admin/dev3">Dev3</Link>
        <Link to="/admin/dev4">Dev4</Link>
        <Link to="/admin/dev5">Dev5</Link>
        <Link to="/admin/dev6">Dev6</Link>
      </div>
    </div>
  );
};

export default MainPage;
