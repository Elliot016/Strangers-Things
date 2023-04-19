import React from "react";
import Login from "./Login";
import { Route, Routes, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h3>Stranger's Things</h3>
      <Link to="/">Home</Link>
      <Link to="/log-in">Login</Link>
    </div>
  );
}
