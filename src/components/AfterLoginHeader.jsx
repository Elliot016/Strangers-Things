import React from "react";
import { Link } from "react-router-dom";

export default function AfterLoginHeader() {
  return (
    <div>
      <h3>Strangers Things</h3>
      <Link to="/posts">Posts</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/">Logout</Link>
    </div>
  );
}
