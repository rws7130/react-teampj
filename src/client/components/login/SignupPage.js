import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { signup } from "../../../api/auth/auth";
import { useUserStore } from "../../../store/useUserStore";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const setUser = useUserStore((state) => state.setUser);

  const { mutate } = useMutation(signup, {
    onSuccess: async (data) => {
      console.log("success");
      await setUser(data);
    },
    onError: (error) => {
      console.error("signup failed", error);
    },
  });

  const handleSignup = () => {
    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    mutate({ email, password, name, nickname });
  };
  const handleVerifyEmail = () => {
    console.log("이메일인증");
  };
  return (
    <div>
      <h1>일반 회원가입</h1>
      <div>
        <p>
          <span>이메일 </span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleVerifyEmail}>이메일 인증하기</button>
          <span>10:00</span>
        </p>

        <p>
          <span>비밀번호 </span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <span>비밀번호 확인 </span>
          <input
            type="password"
            placeholder="Password Confirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </p>
        <p>
          <span>이름 </span>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <span>닉네임 </span>
          <input
            type="text"
            placeholder="Nick Name"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </p>
        <button onClick={handleSignup}>회원가입</button>
        <Link to="/login">로그인</Link>
      </div>
    </div>
  );
};

export default SignupPage;
