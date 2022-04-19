import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user";
import { Avatar, Button } from "@mui/material";
import { AccessTime, Search, HelpOutline } from "@mui/icons-material";
import "./index.css";

const Header = () => {
  const history = useNavigate();
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <header className="header">
      <div className="header__left">
        {user ? (
          <Link to="/">
            <Avatar
              className="header__avatar clickable"
              src={user?.photoURL || ""}
              alt="avatar"
            />
          </Link>
        ) : (
          <Button
            className="header__button"
            variant="contained"
            onClick={() => history("/")}
          >
            Sign In
          </Button>
        )}

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
