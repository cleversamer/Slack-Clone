import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../../store/user";
import "./index.css";

const Home = () => {
  const user = useSelector(selectUser);

  return (
    <div className="home">
      <h1 className="home__heading">
        Hello <span className="home__username">{user.displayName}</span> 👋
      </h1>

      <h2 className="home__welcoming">Happy Chatting ❤️</h2>
    </div>
  );
};

export default Home;
