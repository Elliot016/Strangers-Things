import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { fetchMe } from "../api/users";
import ProfilePage from "./ProfilePage";
import { deletePost, fetchPosts } from "../api/post";

export default function ViewPost({ setPosts }) {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    // fetch all posts
    async function getAllPost() {
      const fetchAllPost = await fetchPosts(token);
      console.log("Result in view post", fetchAllPost);
      if (postId === fetchAllPost.posts._id) {
        setPost(fetchAllPost);
      }
    }
    getAllPost();
    // find the post with the "postId" === post._id
    // once you found the post, set it into state, and render it
  }, []);

  async function handleDelete() {
    // hit your delete ajax fetch function, and pass it token
    try {
      const result = await deletePost(token, postId);
      const fetchProfile = await fetchMe(token);
      setPost(fetchProfile.data.posts);
      //await

      console.log(result);
    } catch (error) {
      console.error("error in handleDelete", error);
    }
  }

  return (
    <div>
      <button
        onClick={async () => {
          handleDelete();
        }}
      >
        Delete Post
      </button>
    </div>
  );
}
