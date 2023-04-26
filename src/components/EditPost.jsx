import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updatePost } from "../api/post";
import useAuth from "../hooks/useAuth";

export default function EditPost() {
  const { id } = useParams();
  const { token } = useAuth();
  const [post, setPost] = useState([]);

  // async function editPost(token, title, description, price, location, id) {
  //   const result = await updatePost();
  //   console.log(title, description, price, location);
  //   setPost(result);
  // }
  // editPost();

  return (
    <div>
      <button>Delete Post</button>
    </div>
  );
}

//fetch data for a single post
//body should be a form and display initial value
// when submit, update values in updatePost()
