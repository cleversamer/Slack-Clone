import React from "react";
import { Link } from "react-router-dom";

const DisabledChat = () => {
  return (
    <article className="chat__disabled">
      <h4 className="chat__disabled-heading">
        You're not allowed to send messages. Please{" "}
        <Link to="/" className="chat__important">
          Sign In
        </Link>{" "}
        to send messages & more in{" "}
        <span className="chat__important">Slack.</span>
      </h4>
    </article>
  );
};

export default DisabledChat;
