import React, { useEffect, useState } from "react";
import { deletePost } from "../api/post";
import useAuth from "../hooks/useAuth";
import AuthProvider from "./auth/AuthProvider";

export default function DeletePost({ id, setPosts }) {
  const [post, setPost] = useState([]);
  const { token } = useAuth();

  //   const handleDelete = () => {
  //     async function myPage() {
  //       const fetchProfile = await fetchMe(token);
  //       console.log("result in ProfilePage:", fetchProfile);
  //       setMyProfile(fetchProfile.data.posts);
  //       setPosts(fetchProfile.data.posts);
  //     }

  useEffect(() => {
    async function removePost() {
      const result = await deletePost(token, id);
      console.log(token, id);
      setPost(result);
    }
    removePost();
  }, [token]);
  return (
    <div>
      <button>Delete</button>
    </div>
  );
}

//delete post
//refetch posts for user
//setPosts(fetch)
// async function myPage() {
//     const fetchProfile = await fetchMe(token);
//     console.log("result in ProfilePage:", fetchProfile);
//     setMyProfile(fetchProfile.data.posts);
//     setPosts(fetchProfile.data.posts)
