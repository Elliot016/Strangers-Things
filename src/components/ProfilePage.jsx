import React, { useEffect, useState } from "react";
import { fetchMe } from "../api/users";
import AfterLoginHeader from "./AfterLoginHeader";
import useAuth from "../hooks/useAuth";

export default function ProfilePage({ token }) {
  const [myPost, setMyPost] = useState([]);
  useEffect(() => {
    async function myProfile() {
      const fetchProfile = await fetchMe();
      console.log(fetchProfile);
      setMyPost(fetchProfile);
      // ask why fetchProfile is reading success:false
    }
    myProfile();
  }, []);
  return (
    <div>
      <AfterLoginHeader />
      Profile Page Component
    </div>
  );
}
