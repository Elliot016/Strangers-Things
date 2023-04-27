import { useState } from "react";
import { useParams } from "react-router-dom";
import { postMessage } from "../api/messages";
import useAuth from "../hooks/useAuth";

export default function Message() {
  const [content, setContent] = useState("");
  const { token } = useAuth();
  const { id } = useParams();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await postMessage(content, id, token);
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
        <button type="submit">Send Message!</button>
      </form>
    </div>
  );
}
