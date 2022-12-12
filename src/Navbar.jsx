import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { FaGraduationCap } from 'react-icons/fa';

/* CSS styling and to allow for responsiveness from: https://github.com/DevLHB/navbar-app */
function Navbar() {
    const [workActive, setWorkActive] = useState(true);
    const [aboutActive, setAboutActive] = useState(false);

    const openWork = () => {
      setWorkActive(true);
      setAboutActive(false);
    }

    const openAbout = () => {
      setWorkActive(false);
      setAboutActive(true);
    }

  return (
    <div class="Navbar">
      <div className="nav-logo"><Link to="/"><FaGraduationCap size={40} /></Link></div>
      <div className="nav-items">
          <div className={`text ${workActive && "active"}`} onClick={() => openWork() }><Link to="/">Work</Link></div>
          <div className={`text ${aboutActive && "active"}`} onClick={() => openAbout()}><Link to="/about">About</Link></div>
      </div>
    </div>
  );
}

export default Navbar;

