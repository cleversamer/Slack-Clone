import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./context";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import "./css/app.css";

const App = () => {
  return (
    <div className="app">
      <UserProvider value={{}}>
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
        </div>
      </UserProvider>
    </div>
  );
};

export default App;
