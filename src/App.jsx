import React, { useState } from "react";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<SignUp setToken={setToken} />} />
        <Route path="/log-in" element={<Login />} />
      </Routes>
      {/* <SignUp setToken={setToken} /> */}
    </div>
  );
}

export default App;
