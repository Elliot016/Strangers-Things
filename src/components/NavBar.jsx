import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();
  return (
    <div className="Nav-bar">
      <h3 className="Navbar-header">Strangers Things</h3>
      <ul>
        <li>
          <Link className="Navbar-link" to="/posts ">
            Posts
          </Link>
        </li>
        <li>
          <Link className="Navbar-link" to="/profile ">
            Profile
          </Link>
        </li>
      </ul>

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
