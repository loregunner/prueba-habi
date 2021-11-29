import React from "react";

import logo from "../img/logo.png";
import "./styles/header.css";
class Header extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <div>
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Pizza</span>
            <span className="font-weight-bold">Queen</span>
          </a>
          </div>
          <div>
          <a className="Navbar__historico" href="/dashboard">Historico</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
