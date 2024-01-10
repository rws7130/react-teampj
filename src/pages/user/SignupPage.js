import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useUserStore } from '../../store/useUserStore';
import { Link } from 'react-router-dom';
import { signup } from '../../api/auth.js';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [code, setCode] = useState('');
  const setUser = useUserStore((state) => state.setUser);

  const { mutate } = useMutation(signup, {
    onSuccess: async (data) => {
      console.log('success');
      await setUser(data);
    },
    onError: (error) => {
      console.error('signup failed', error);
    },
  });

  const handleSignup = () => {
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    mutate({ email, password, name, nickname });
  };
  const handleSendToEmail = async () => {
    console.log('이메일인증');

    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/mail/send-code`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      },
    );
    const data = await res.json();
    alert(`${data.message} \n ${data.expirationTime}`);
    // timer 시작 10분
  };

  const handleVerifyCode = async () => {
    console.log('인증번호확인');
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/mail/verify-code`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, code }),
        },
      );
      const data = await res.json();
      console.log(data);
      alert('인증이 완료되었습니다.');
    } catch (error) {
      console.log(error);
    }
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
          <button onClick={handleSendToEmail}>이메일 인증하기</button>
          <span>10:00</span>

          <input
            type="text"
            placeholder="인증번호를 입력해주세요."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button onClick={handleVerifyCode}>확인</button>
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
