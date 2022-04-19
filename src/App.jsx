import React, { Fragment, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import db from "./firebase";
import { setChannels } from "./store/channels";
import { selectUser } from "./store/user";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Login from "./pages/login";
import Home from "./pages/home";
import Chat from "./components/chat";
import NotFound from "./pages/not-found";
import "./css/app.css";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    // User auth here ...

    db.collection("channels")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(setChannels(data));
      });
  }, []);

  return (
    <Fragment>
      <Header />

      <div className="app__body">
        <Sidebar />

        <Routes>
          <Route path="/room/:roomId" element={<Chat />} />

          <Route path="/" element={user ? <Home /> : <Login />} />

          <Route path="/not-found" element={<NotFound />} />

          <Route
            path="*"
            element={<Navigate to={user ? "/not-found" : "/login"} replace />}
          />
        </Routes>
      </div>
    </Fragment>
  );
};

export default App;
