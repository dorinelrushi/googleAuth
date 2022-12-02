import React from "react";
import { AuthContextProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import Signin from "../src/components/pages/Signin";
import Home from "./components/pages/Home";
import Acount from "./components/pages/Acount";
import Navbar from "./components/pages/Navbar";

export default function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<Signin />} />
          <Route path="/account" element={<Acount />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}
