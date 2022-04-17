import React from "react";
import { useParams } from "react-router-dom";
import { StarBorderOutlined, InfoOutlined } from "@mui/icons-material";
import "./index.css";

const Chat = () => {
  const { roomId } = useParams();

  return (
    <section className="chat">
      <header className="chat__header">
        <div className="chat__header-left">
          <h4 className="chat__channel-name">
            <strong># general</strong>
            <StarBorderOutlined className="chat__header-icon" />
          </h4>
        </div>

        <div className="chat__header-right">
          <InfoOutlined className="clickable" />
        </div>
      </header>
    </section>
  );
};

export default Chat;
