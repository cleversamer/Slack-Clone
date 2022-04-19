import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import db from "../../firebase";
import { selectCurrentChannel } from "../../store/channels";
import Message from "../message";
import { StarBorderOutlined, InfoOutlined } from "@mui/icons-material";
import "./index.css";

const Chat = () => {
  const history = useNavigate();
  const { roomId } = useParams();
  const chat = useSelector(selectCurrentChannel);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chat?.id !== roomId) {
      history("/not-found");
      return;
    }

    if (roomId) {
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
    }
  }, [roomId]);

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

      <main className="chat__messages">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </main>
    </section>
  );
};

export default Chat;
