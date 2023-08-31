import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
const Layout = () => {
  return (
    <div>
      <AppBar />
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
