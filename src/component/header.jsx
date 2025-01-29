import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";


export default function Header({ logo, lien, buttonLabel, redirection }) {
  return (
    <header id="header">
      <nav id="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" /> 
        </div>
        <ul id="menu">
          {lien.map((lien, index) => (
            <li key={index}>
              <a href={lien.href} className={lien.className} onClick={redirection}>
                {lien.label} 
              </a>
            </li>
          ))}
        </ul>
        <button className="menu-button">{buttonLabel}</button>
      </nav>
    </header>
  );
}
