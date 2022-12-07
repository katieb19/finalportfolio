import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Navbar.css";

import { FaGraduationCap } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div class="Navbar">
        <div className="nav-logo"><Link to="/"><FaGraduationCap size={40} /></Link></div>
        <div className={`nav-items ${isOpen && "open"}`}>
            <Link to="/">Work</Link>
            <Link to="/about">About</Link>
        </div>
        <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        </div>
    </div>
  );
}

export default Navbar;

