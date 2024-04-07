import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    username.trim();
    if (username && password) setUser({ username, password });
    if (username) nav("/");
    else alert("wrong credentials");
  };
  return (
    <div className="inp-outer-div">
      <div className="inp-inner-div">
        <div className="inp-input-div">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-style"
            placeholder="username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-style"
            placeholder="password"
            required
          />
        </div>
        <div>
          <button onClick={handleSubmit} className="button-style">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
