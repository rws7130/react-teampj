import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { login, kakaoLogin } from "../../../api/auth/auth";
import { useUserStore } from "../../../store/useUserStore";
import { Link, useNavigate } from "react-router-dom";
import {
  LoginContainer,
  LoginBox,
  LoginInput,
  LoginButton,
  KaKaoLoginButton,
  LoginCheckboxLabel,
  LoginCheckbox,
} from "./LoginStyled";

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
    <LoginContainer>
      <LoginBox>
        <h1>로그인</h1>
        <LoginInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LoginInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginCheckboxLabel htmlFor="memory">아이디 저장</LoginCheckboxLabel>
        <LoginCheckbox type="checkbox" name="memory" />
        <LoginButton onClick={handleLogin}>Login</LoginButton>
        <Link to="/signup">회원가입</Link>
        <KaKaoLoginButton onClick={handleKaKaoLogin}>
          카카오 간편로그인
        </KaKaoLoginButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;
