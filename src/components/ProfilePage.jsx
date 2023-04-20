import React, { useEffect, useState } from "react";
import Login from "./Login";
import { login, registerUser } from "../api/users";
import { fetchPost } from "../api/post";

export default function ProfilePage() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getPost() {
      const result = await fetchPost();
      setPost(result);
    }
    getPost();
  }, []);

  return (
    <div>
      <h1>Welcome "username"</h1>
    </div>
  );
}
