import React, { useEffect, useState } from "react";
import { fetchMe } from "../api/users";
import AllPost from "./AllPost";

import { postMessage } from "../api/messages";
import { fetchPosts } from "../api/post";
import { deletePost } from "../api/post";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useParams } from "react-router-dom";
import ViewPost from "./ViewPost";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [myProfile, setMyProfile] = useState({});
  const [posts, setPosts] = useState([]);
  const { token, user } = useAuth();
  const { id } = useParams;
  console.log("Post from profile:", posts);

  useEffect(() => {
    async function myPage() {
      const fetchProfile = await fetchMe(token);
      console.log("result in ProfilePage:", fetchProfile);
      setMyProfile(fetchProfile.data.posts);
      setPosts(fetchProfile.data.posts); //this allows me to map through the post arrays
      // console.log(fetchProfile.data.posts);
      // ask why fetchProfile is reading success:false
      //answer: had to change [myPost, setMyPost] = useState({}) and import useAuth;
    }
    myPage();
  }, [token]);

  return (
    <div>
      <h1 className="Profilepage-header">Profile Page</h1>
      <h2>My Post:</h2>

      {posts.map((post) => {
        return (
          <div className="Profilepage-post" key={post._id}>
            <h4>{post.title}</h4>
            <p>{post.description}</p>
            <p>{post.price}</p>
            <p>{post.location}</p>
            <h3>Messages:</h3>
            {post.messages.map((message) => {
              return <p>{message.content}</p>;
            })}
          </div>
        );
      })}
      <h2>My Messages:</h2>
      {/* {user.id === posts.author._id && <p>{user.messages}</p>} */}
    </div>
  );
}
