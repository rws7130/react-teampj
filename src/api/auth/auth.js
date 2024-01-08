import { useUserStore } from "../../client/store/useUserStore";
import secureLocalStorage from "react-secure-storage";

export const login = async (user) => {
  const token = btoa(`${user.email}:${user.password}`);
  try {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/auth/login/email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${token}`,
        },
      }
    );
    const data = await res.json();
    if (data.statusCode !== 401) {
      useUserStore.getState().setAccessToken(data.accessToken);
      secureLocalStorage.setItem("refreshToken", data.refreshToken);
    } else {
      alert(data.message);
    }
    return data.userInfo;
  } catch (error) {
    console.error(error);
  }
};
