import React from "react";
import { Avatar } from "@mui/material";
import { AccessTime, Search, HelpOutline } from "@mui/icons-material";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar clickable"
          src="https://avatars.githubusercontent.com/u/73291969?v=4"
          alt="avatar"
        />

        <AccessTime className="header__icon header__icon--left clickable" />
      </div>

      <div className="header__search">
        <Search className="header__icon clickable" />

        <input
          className="header__search-input"
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="header__right">
        <HelpOutline className="header__icon clickable" />
      </div>
    </header>
  );
};

export default Header;
