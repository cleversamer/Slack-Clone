import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user";
import { firestore } from "firebase";
import { IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";
import db from "../../firebase";

const ChatInput = ({ channelId }) => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    if (input.length) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .add({
          message: input,
          timestamp: firestore.FieldValue.serverTimestamp(),
          user: { id: user?.uid, name: user?.displayName },
          userAvatar: user.photoURL,
        });

      setInput("");
    }
  };

  return (
    <form className="chat__input" onSubmit={handleSend}>
      <input
        className="chat__input-box"
        type="text"
        placeholder="Send a message..."
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />

      <IconButton className="chat__input-button" type="submit">
        <Send />
      </IconButton>
    </form>
  );
};

export default ChatInput;
