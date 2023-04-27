import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { fetchMe } from "../api/users";
import ProfilePage from "./ProfilePage";

export default function ViewPost({ setPosts }) {
  const [post, setPost] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    async function myPage() {
      const fetchProfile = await fetchMe(token);
      console.log("Result in view post", fetchProfile);
      setPost(fetchProfile.data._id);
    }
    myPage();
  }, [token]);

  async function handleDelete() {
    try {
      const fetchProfile = await fetchMe(token);
      console.log("Result in handle delete", fetchProfile);
    } catch (error) {
      console.error("there was an error in view post", error);
    }
  }

  return (
    <div>
      <p>{post._id}</p>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
}
