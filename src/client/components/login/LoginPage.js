import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { login, kakaoLogin } from "../../../api/auth/auth";
import { useUserStore } from "../../../store/useUserStore";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useUserStore((state) => state.setUser);

  const { mutate } = useMutation(login, {
    onSuccess: async (data) => {
      console.log("success");
      await setUser(data);
    },
  });

  const { mutate: kakao } = useMutation(kakaoLogin, {
    onSuccess: async (data) => {
      console.log("success kakao", data);
      await setUser(data);
    },
    onError: (error) => {
      console.error("Kakao login failed", error);
    },
  });

  const handleLogin = () => {
    mutate({ email, password });
  };
  const handleKaKaoLogin = () => {
    kakao();
  };

  return (
    <div>
      <h1>일반회원로그인</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <div>
        <h1>카카오 로그인</h1>
        <button onClick={handleKaKaoLogin}>Kakao Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
