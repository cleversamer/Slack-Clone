import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onSnapshot } from "firebase/firestore";
import { channelsQuery } from "./firebase";
import { setChannels } from "./store/channels";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import Chat from "./components/chat";
import NotFound from "./pages/not-found";
import "./css/app.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onSnapshot(channelsQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      dispatch(setChannels(data));
    });
  }, []);

  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />

        <Routes>
          <Route path="/room/:roomId" element={<Chat />} />
          <Route path="/" element={<Home />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
