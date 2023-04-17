import React from "react";
import { useState } from "react";
import App from "../App";
import { registerUser } from "../api/users";

export default function SignUp({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await registerUser(username, password);
      console.log("result in component", result);
      localStorage.getItem("token", result.data.token);
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
        <button>Submit</button>
      </form>
    </div>
  );
}
