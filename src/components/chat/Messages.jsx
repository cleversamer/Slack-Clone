import React, { useEffect, useRef } from "react";
import Message from "../message";

const Messages = ({ messages, user }) => {
  const messagesRef = useRef(null);

  useEffect(() => {
    if (messagesRef) {
      messagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  });

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
