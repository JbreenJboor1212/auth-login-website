import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/Register";
import Dashboard from "./dashboard/Dashboard";
import ForgotPassword from "./auth/ForgotPassword";
import UpdateProfile from "./auth/UpdateProfile";
import Header from "../components/Header";

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/update-profile" element={<UpdateProfile />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Home;
