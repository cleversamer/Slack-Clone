import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentChannel } from "../../store/channels";
import { selectUser } from "../../store/user";
import ChatInput from "./ChatInput";
import DisabledChat from "./DisabledChat";
import Messages from "./Messages";
import { StarBorderOutlined, InfoOutlined } from "@mui/icons-material";
import "./index.css";

const Chat = () => {
  const history = useNavigate();
  const { roomId } = useParams();
  const chat = useSelector(selectCurrentChannel);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (chat?.id !== roomId) {
      history("/not-found");
      return;
    }
  });

  return (
    <section className="chat">
      <header className="chat__header">
        <div className="chat__header-left">
          <h4 className="chat__channel-name">
            <strong># {chat?.name || "general"}</strong>
            <StarBorderOutlined className="chat__header-icon" />
          </h4>
        </div>

        <div className="chat__header-right">
          <InfoOutlined className="clickable" />
        </div>
      </header>

      <Messages user={user} roomId={roomId} />

      {user ? <ChatInput channelId={chat?.id} /> : <DisabledChat />}
    </section>
  );
};

export default Chat;
