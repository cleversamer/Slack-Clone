import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { AccessTime, Search, HelpOutline } from "@mui/icons-material";
import "./index.css";

const Header = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/">
          <Avatar
            className="header__avatar clickable"
            src="https://avatars.githubusercontent.com/u/73291969?v=4"
            alt="avatar"
          />
        </Link>

        <AccessTime className="header__icon header__icon--left clickable" />
      </div>

      <form className="header__search" onSubmit={handleSubmit}>
        <button className="no-button" type="submit">
          <Search className="header__icon clickable" />
        </button>

        <input
          className="header__search-input"
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
      </form>

      <div className="header__right">
        <HelpOutline className="header__icon clickable" />
      </div>
    </header>
  );
};

export default Header;
