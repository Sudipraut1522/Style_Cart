import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import UserLayout from "../layout/UserLayout";
import Contact from "../page/Contact";
import SignUp from "../page/SignUp";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" index element={<About />} />
          <Route path="/contact" index element={<Contact />} />
          <Route path="/about" index element={<About />} />
          <Route path="/signup" index element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
