import React from "react";
import "./index.css";

const Message = ({ message }) => {
  const getAvatarUrl = () => {
    return message.userAvatar;
  };

  return (
    <article className="message">
      <img
        className="message__avatar clickable"
        src={getAvatarUrl()}
        alt={message.user.name || "avatar"}
      />

      <div className="message__info">
        <h4 className="message__username">
          {message.user.name}{" "}
          <span className="message__timestamp">
            {new Date(message.timestamp.toDate()).toUTCString()}
          </span>
        </h4>

        <p>{message.message}</p>
      </div>
    </article>
  );
};

export default Message;
