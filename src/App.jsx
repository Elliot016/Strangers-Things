import React, { useState } from "react";
import SignUp from "./components/auth/SignUp";
import Header from "./components/Header";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import useAuth from "./hooks/useAuth";
import AllPost from "./components/AllPost";
import NavBar from "./components/NavBar";

function App() {
  const { token, user } = useAuth();

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/posts" element={<AllPost />} />
        {/* need to make a route to `/${posts._id}`to View Post on AllPost.jsx */}
        {/* need to make a route to `/${posts._id}` to Edit Post on ProfilePage.jsx and to delete post  */}
      </Routes>
    </div>
  );
}

export default App;
