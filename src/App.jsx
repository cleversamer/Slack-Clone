import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./context";
import Header from "./components/header";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

const App = () => {
  return (
    <div className="app">
      <UserProvider value={{}}>
        <Header />

        <Routes>
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </UserProvider>
    </div>
  );
};

export default App;
