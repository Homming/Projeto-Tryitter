import React from "react";
import "./logo.css";
import logo from "../../logo.png"

function Logo() {
  return (
      <img className="logo" src={logo} alt="Logo" />
  );
}

export default Logo;