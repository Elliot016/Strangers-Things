import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postMessage } from "../api/messages";
import useAuth from "../hooks/useAuth";

export default function Message() {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const { token } = useAuth();
  const { id } = useParams();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await postMessage(id, token, content);
      setContent(response);
      console.log(content, "message from content");
      //need help displaying the messages in post.messages
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Message
        <input
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          type="text"
          id="message"
          placeholder="Title"
        />
        <button type="submit" onClick={() => navigate("/posts")}>
          Send Message!
        </button>
      </form>
    </div>
  );
}
