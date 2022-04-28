import React, { useState, useEffect, useRef } from "react";
import Message from "../message";
import db from "../../firebase";

const Messages = ({ user, roomId }) => {
  const [messages, setMessages] = useState([]);
  const messagesRef = useRef(null);

  useEffect(() => {
    db.collection("channels")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(data);
      });
  });

  useEffect(() => {
    if (messagesRef) {
      messagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <main className="chat__messages">
      {messages?.map((message) => (
        <Message
          key={message.id}
          message={message}
          sender={message?.user?.id === user?.uid}
        />
      ))}

      <div ref={messagesRef} />
    </main>
  );
};

export default Messages;
