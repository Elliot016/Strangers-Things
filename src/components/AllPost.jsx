import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/post";
import AfterLoginHeader from "./NavBar";
import AddPost from "./AddPost";
import EditPost from "./EditPost";

export default function AllPost() {
  const [posts, setPosts] = useState([]);
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
            <EditPost />
          </div>
        );
      })}
    </div>
  );
}
