import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";
import "../Navbar.css";

const Layout = () => {
  return (
    <div class="mainPage">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;