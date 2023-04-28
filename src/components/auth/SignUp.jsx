import React from "react";
import { useState } from "react";
import App from "../../App";
import { registerUser } from "../../api/users";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setToken, user } = useAuth();
  console.log("User from Sign up form:", user);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await registerUser(username, password);
      setToken(result.data.token);
      console.log("result in component", result);
      localStorage.setItem("token", result.data.token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Sign Up!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => navigate("/profile")}>Submit</button>
        <Link to="/">Already have an account? Login!</Link>
      </form>
    </div>
  );
}
