import { useUserStore } from "../../store/useUserStore";
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
    console.log("응답코드 변경해야함");
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

export const kakaoLogin = async () => {
  window.Kakao.init(process.env.REACT_APP_KAKAO_JS_SDK_KEY);
  console.log(window.Kakao.isInitialized());

  return new Promise((resolve, reject) => {
    window.Kakao.Auth.login({
      success: async function (authObj) {
        try {
          const res = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/auth/kakao/login/js`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                authorization: `Basic ${authObj.access_token}`,
              },
            }
          );
          const data = await res.json();
          console.log(data);
          console.log("응답코드 변경해야함");
          if (data.statusCode !== 401 || data.statusCode !== 400) {
            useUserStore.getState().setAccessToken(data.accessToken);
            secureLocalStorage.setItem("refreshToken", data.refreshToken);
            resolve(data.userInfo);
          } else {
            alert(data.message);
            reject(data.message);
          }
        } catch (error) {
          console.error(error);
          reject(error);
        }
      },
      fail: function (err) {
        console.error(err);
        reject(err);
      },
    });
  });
};
