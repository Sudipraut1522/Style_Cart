import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import UserLayout from "../layout/UserLayout";
import Contact from "../page/Contact";
import SignUp from "../page/SignUp";
import Login from "../page/Login";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/about"  element={<About />} />
          <Route path="/signup"  element={<SignUp />} />
          <Route path="/login"  element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
