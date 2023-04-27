import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {}

export default function NavBar() {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();
  return (
    <div>
      <h3>Strangers Things</h3>
      <Link to="/posts ">Posts</Link>
      <Link to="/profile ">Profile</Link>
      <Link to="/messages ">Messages</Link>

      {token && (
        <button
          onClick={() => {
            setToken(null);
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          Log Out
        </button>
      )}
    </div>
  );
}
