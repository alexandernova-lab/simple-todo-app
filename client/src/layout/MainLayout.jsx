import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar.jsx";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <Toaster />
      <Navbar />
      {/* 2. AuthLayout (or wrapper) handles the flex centering */}
      <div className="flex-1 flex items-center justify-center p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
