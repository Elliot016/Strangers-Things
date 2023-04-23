import React, { useEffect, useState } from "react";
import { fetchMe } from "../api/users";
import AfterLoginHeader from "./AfterLoginHeader";

export default function ProfilePage() {
  // const [myPost, setMyPost] = useState([]);
  // useEffect(() => {
  //   async function myProfile() {
  //     const fetchProfile = await fetchMe();
  //     console.log(fetchProfile);
  //     setMyPost(fetchProfile);
  //   }
  //   myProfile();
  // }, []);
  return (
    <div>
      <AfterLoginHeader />
      Profile Page Component
    </div>
  );
}
