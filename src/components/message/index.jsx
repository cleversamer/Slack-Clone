import React from "react";
import "./index.css";

const Message = ({ message, sender }) => {
  const getClasses = () => {
    return "message" + (sender ? " message--sender" : "");
  };

  return (
    <article className={getClasses()}>
      <img
        className="message__avatar clickable"
        src={message.userAvatar}
        alt={message.user.name || "avatar"}
      />

      <div className="message__info">
        <h4 className="message__username">
          {message.user.name}{" "}
          <span className="message__timestamp">
            {new Date(message?.timestamp?.toDate())?.toUTCString()}
          </span>
        </h4>

        <p className="message__text">{message.message}</p>
      </div>
    </article>
  );
};

export default Message;
