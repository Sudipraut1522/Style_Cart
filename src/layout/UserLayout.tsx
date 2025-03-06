import React from "react";
import Navbar from "../component/ui/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/ui/Footer";

const UserLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className=" px-4 lg:px-[10%]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
