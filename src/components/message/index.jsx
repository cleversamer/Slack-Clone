import React from "react";
import "./index.css";

const Message = ({ message, sender }) => {
  const getClasses = () => {
    return "message message--" + (sender ? "sender" : "receiver");
  };

  const parseTimetamp = () => {
    const newDate = message?.timestamp?.toDate();

    let hours = newDate?.getHours();

    let mins = newDate?.getMinutes();
    if (mins < 10) {
      mins = `0${mins}`;
    }

    let meridiem = "AM";
    if (hours > 12) {
      meridiem = "PM";
      hours -= 12;
    }

    return !hours || !mins ? "Now" : `${hours}:${mins} ${meridiem}`;
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
          <span className="message__timestamp">{parseTimetamp()}</span>
        </h4>

        <p className="message__text">{message.message}</p>
      </div>
    </article>
  );
};

export default Message;
