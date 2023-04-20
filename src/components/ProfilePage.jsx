import React, { useEffect, useState } from "react";
import Login from "./Login";
import { login, registerUser } from "../api/users";
import { fetchPosts } from "../api/post";

export default function ProfilePage() {
  return (
    <div>
      <h1>Welcome "username"</h1>
    </div>
  );
}
