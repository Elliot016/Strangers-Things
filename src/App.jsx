import React, { useState } from "react";
import SignUp from "./components/auth/SignUp";
import Header from "./components/Header";
import Login from "./components/Login";
import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import useAuth from "./hooks/useAuth";
import AllPost from "./components/AllPost";
import NavBar from "./components/NavBar";
import EditPost from "./components/EditPost";
import ViewPost from "./components/ViewPost";

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
        <Route path="/post/:id" element={<EditPost />} />
        <Route path="/view/:id" element={<ViewPost />} />
        {/* need to make a route to `/${posts._id}`to View Post on AllPost.jsx */}
        {/* need to make a route to `/${posts._id}` to Edit Post on ProfilePage.jsx and to delete post  */}
      </Routes>
    </div>
  );
}

export default App;
