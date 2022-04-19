import React from "react";
import { useDispatch } from "react-redux";
import { auth, provider } from "../../firebase";
import { authenticateUser } from "../../store/user";
import { Button } from "@mui/material";
import "./index.css";

const Login = () => {
  const dispatch = useDispatch();

  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(authenticateUser(result.user));
        console.log(result);
      })
      .catch((err) => {});
  };

  return (
    <div className="login">
      <div className="login__info">
        <img className="login__logo" src="img/logo.png" alt="Slack logo" />

        <h2 className="login__heading">Sign In to Web Developers HQ</h2>

        <p className="login__author">
          Slack App Clone - By{" "}
          <a
            className="login__link"
            href="https://twitter.com/ssadawi__"
            target="_blank"
            rel="noreferrer"
          >
            Samer A.
          </a>{" "}
          🚀
        </p>
      </div>

      <Button
        className="login__button"
        onClick={() => handleSignIn()}
        color="secondary"
        variant="contained"
      >
        Sign In With Google
      </Button>
    </div>
  );
};

export default Login;
