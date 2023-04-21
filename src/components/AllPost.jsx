import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/post";

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
      {posts.map((post) => {
        return <div key={post._id}>{post.title}</div>;
      })}
    </div>
  );
}
