import React, { useEffect, useReducer, useState } from "react";
import { deletePost, fetchPosts } from "../api/post";
import AfterLoginHeader from "./NavBar";
import AddPost from "./AddPost";
import ViewPost from "./ViewPost";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function AllPost() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const { user, token } = useAuth();
  console.log(posts);
  useEffect(() => {
    async function getAllPost() {
      const getPosts = await fetchPosts();
      setPosts(getPosts.data.posts);
    }
    getAllPost();
  }, []);
  return (
    <div>
      <h1>All Post</h1>
      <AddPost fetchPosts={fetchPosts} setPosts={setPosts} />
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>{post.price}</p>
            <p>{post.location}</p>
            <button onClick={() => navigate(`/posts/${post._id}/messages`)}>
              Message
            </button>
            {user._id === post.author._id && (
              <button
                onClick={async () => {
                  await deletePost(token, post._id);
                  const response = await fetchPosts();
                  if (response.success) {
                    setPosts(response.data.posts);
                  } else {
                    console.error(response.error);
                  }
                }}
              >
                Delete
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
