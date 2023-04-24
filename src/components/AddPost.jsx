import React, { useEffect, useState } from "react";
import { makePost } from "../api/post";

export default function AddPost() {
  const [newPost, setNewPost] = useState([]);
  useEffect(() => {
    async function NewPost() {
      const makeNewPost = await makePost();
      console.log(makeNewPost);
    }
  }, []);
  return (
    <div>
      <button>Add New Post</button>
    </div>
  );
}
