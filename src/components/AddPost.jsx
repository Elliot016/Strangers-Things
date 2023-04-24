import React, { useEffect, useState } from "react";
import { fetchPosts, makePost } from "../api/post";
import useAuth from "../hooks/useAuth";

export default function AddPost({ fetchPosts, setPosts }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const { token } = useAuth();
  console.log("token:", token);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      "title, descripton, location, price:",
      title,
      description,
      location,
      price
    );
    await makePost(token, title, description, price);
    const getPosts = await fetchPosts();
    setPosts(getPosts.data.posts);
    setTitle("");
    setDescription("");
    setPrice("");
    setLocation("");
  };
  return (
    <div>
      <h3>Create Post</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <button type="submit">Add New Post</button>
      </form>
    </div>
  );
}
