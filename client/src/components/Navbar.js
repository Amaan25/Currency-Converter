 import React from "react";
 import '../styles/Navbar.css';



export default function Navbar() {
  return (
   

    <div className="navbar">
      <div className="navbar__left">
        <h1>ExchangeRate</h1>
      </div>
      <div className="navbar__right">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        </div>
    </div>
    
    );
}

