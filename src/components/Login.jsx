import React from "react";
import { login } from "../api/users";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setToken, user } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
  }

  async function handleSubmit(e) {
    console.log("Username and Password", username, password);
    e.preventDefault();
    try {
      const result = await login(username, password);
      console.log("result in component", result);

      if (result.success === true) {
        // log in succeeded
        setToken(result.data.token);
        localStorage.setItem("token", result.data.token);
        navigate("/profile");
      } else {
        alert("Login Failed");
        // log in failed
        //alert log in failed
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Login-container">
      <h1 className="Login-header">Strangers Things</h1>
      <h2>Login!</h2>
      <form className="Login-form" onSubmit={handleSubmit}>
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
        <button>Submit</button>
        <Link to="/sign-up">Dont have an account? Sign up</Link>
      </form>
    </div>
  );
}
