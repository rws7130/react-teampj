import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";


import { useNavigate } from "react-router-dom";
import {login} from "../../api/auth";
import {useUserStore} from "../../store/useUserStore";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (user) {
      navigate("/admin/main");
    }
  }, [user, navigate]);

  const { mutate } = useMutation(login, {
    onSuccess: (data) => {
      setUser(data);
      navigate("/admin/main");
    },
  });

  const handleLogin = () => {
    mutate({ email, password });
  };

  return (
    <div>
      <h1>어드민 로그인</h1>
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
    </div>
  );
};

export default AdminLogin;
