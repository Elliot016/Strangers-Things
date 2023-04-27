import { useState } from "react";
import { useParams } from "react-router-dom";
import { postMessage } from "../api/messages";
import useAuth from "../hooks/useAuth";

export default function Message() {
    const [content, setContent] = useState("");
    const { token } = useAuth();
    const { id } = useParams();
    const [message, setMessage] = useState("");
    async function handleSubmit(e) {
      e.preventDefault();
      try {
        const response = await postMessage(id, token, content);
        console.log(content);
        setMessage(response);
        console.log(message, "message from message");
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Message
        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
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
