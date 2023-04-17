import React, { useState } from "react";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div className="App">
      <Header />
      <SignUp setToken={setToken} />
    </div>
  );
}

export default App;
