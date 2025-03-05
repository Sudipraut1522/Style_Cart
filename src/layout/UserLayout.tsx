import React from "react";
import Navbar from "../component/ui/Navbar";
import { Outlet } from "react-router-dom";

const UserLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default UserLayout;
