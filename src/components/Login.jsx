import React from "react";
import ProfilePage from "./ProfilePage";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h1>Login!</h1>
      <form onSubmit={handleSubmit}>
        <input type="username" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button onClick={() => navigate("/profile")}>Submit</button>
        <Link to="/sign-up">Dont have an account? Sign up</Link>
      </form>
    </div>
  );
}
