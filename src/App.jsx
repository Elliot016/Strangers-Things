import React, { useState } from "react";
import SignUp from "./components/auth/SignUp";
import Header from "./components/Header";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import useAuth from "../hooks/useAuth";
import AuthProvider from "./components/auth/AuthProvider";
import AllPost from "./components/AllPost";

function App() {
  const { token, user } = useAuth();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/posts" element={<AllPost />} />
      </Routes>
      {/* <SignUp setToken={setToken} /> */}
    </div>
  );
}

export default App;
