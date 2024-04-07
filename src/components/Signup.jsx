import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const nav = useNavigate();

  const handleSubmit = (e) => {
    if (username && password) setUser({ username, password });
    if (username) nav("/");
    else alert("wrong credentials");
  };
  return (
    <div className="inp-outer-div">
      <div className="inp-inner-div">
        <div className="inp-input-div">
          <input
            type="email"
            value={useremail}
            onChange={(e) => setUseremail(e.target.value)}
            className="input-style"
            placeholder="email"
            required
          />
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
          />{" "}
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input-style"
            placeholder="confirm password"
            required
          />
        </div>
        <div>
          <button onClick={handleSubmit} className="button-style">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}
