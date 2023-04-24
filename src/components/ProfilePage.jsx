import React, { useEffect, useState } from "react";
import { fetchMe } from "../api/users";
import AllPost from "./AllPost";

import useAuth from "../hooks/useAuth";

export default function ProfilePage() {
  const [myProfile, setMyProfile] = useState({});
  const { token } = useAuth();
  useEffect(() => {
    async function myProfile() {
      const fetchProfile = await fetchMe(token);
      console.log("result in ProfilePage:", fetchProfile);
      setMyProfile(fetchProfile.data.posts);
      // ask why fetchProfile is reading success:false
      //answer: had to change [myPost, setMyPost] = useState({}) and import useAuth;
    }
    myProfile();
  }, [token]);
  return (
    <div>
      <h1>Profile Page</h1>
      {/* {posts.map((post) => {
        <p>{post.descripton}</p>;
      })} */}
    </div>
  );
}
