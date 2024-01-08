import React, { useEffect } from "react";
import { useUserStore } from "../../store/useUserStore";
import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const HomePage = () => {
  const user = useUserStore((state) => state.user);
  useEffect(() => {
    const refreshToken = secureLocalStorage.getItem("refreshToken");
    if (refreshToken) {
      useUserStore.getState().setRefreshToken(refreshToken);
    }
  }, []);

  return (
    <div>
      <h1>홈 </h1>
      <h2>{user?.email}</h2>
      <Link to="/admin">어드민</Link>
    </div>
  );
};

export default HomePage;
