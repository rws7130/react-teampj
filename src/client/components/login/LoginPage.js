import React, { useState } from "react";
import { useMutation } from "react-query";
import { login } from "../../../api/auth/auth";
import { useUserStore } from "../../store/useUserStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useUserStore((state) => state.setUser);

  const { mutate } = useMutation(login, {
    onSuccess: (data) => {
      setUser(data);
    },
  });

  const handleLogin = () => {
    mutate({ email, password });
  };

  return (
    <div>
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

export default LoginPage;
