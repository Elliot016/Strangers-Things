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
  const [searchParam, setSearchParam] = useState("");
  const { user, token } = useAuth();
  console.log(posts);
  useEffect(() => {
    async function getAllPost() {
      const getPosts = await fetchPosts();
      setPosts(getPosts.data.posts);
    }
    getAllPost();
  }, []);

  const filteredPost = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchParam);
  });
  console.log(filteredPost, "filtered post");

  return (
    <div>
      <h1 className="Allpost-header">All Post</h1>
      <div>
        <input
          className="searchbar"
          id="search"
          type="text"
          placeholder="search"
          onChange={(e) => {
            setSearchParam(e.target.value.toLowerCase());
            console.log(searchParam);
          }}
        />
      </div>
      <AddPost fetchPosts={fetchPosts} setPosts={setPosts} />
      {posts.map((post) => {
        return (
          <div className="post-container">
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
                  //this will delete the user's post in All Post but will still show up in Profile Page
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        );
      })}
      {/* This will show filtered post in console but wont show on page */}
      {posts.length > 0 &&
        searchParam &&
        filteredPost.map((post) => {
          return (
            <div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>{post.price}</p>
              <p>{post.location}</p>
              <p></p>
            </div>
          );
        })}
    </div>
  );
}
