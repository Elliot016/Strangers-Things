import React, { useState } from "react";
import SignUp from "./components/auth/SignUp";
import Message from "./components/messages";
import Login from "./components/Login";
import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import useAuth from "./hooks/useAuth";
import AllPost from "./components/AllPost";
import NavBar from "./components/NavBar";

import ViewPost from "./components/ViewPost";
import { postMessage } from "./api/messages";

function App() {
  const { token, user } = useAuth();
  const [messages, setMessages] = useState([]);
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/posts" element={<AllPost />} />
        <Route path="/posts/:id/messages" element={<Message />} />
        <Route path="/view/:postid" element={<ViewPost />} />
        {/* need to make a route to `/${posts._id}`to View Post on AllPost.jsx */}
        {/* need to make a route to `/${posts._id}` to Edit Post on ProfilePage.jsx and to delete post  */}
      </Routes>
    </div>
  );
}

export default App;
