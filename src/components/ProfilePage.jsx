import React, { useEffect, useState } from "react";
import { fetchMe } from "../api/users";

import useAuth from "../hooks/useAuth";

export default function ProfilePage() {
  const [myProfile, setMyProfile] = useState({});
  const { token } = useAuth();
  useEffect(() => {
    async function myProfile() {
      const fetchProfile = await fetchMe(token);
      console.log(fetchProfile);
      setMyProfile(fetchProfile);
      // ask why fetchProfile is reading success:false
    }
    myProfile();
  }, []);
  return <div>Profile Page Component</div>;
}
