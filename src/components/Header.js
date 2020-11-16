import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="Header">
        <img src={logo} alt="logo-vinted" />
        <nav>
          <button>s'inscrire</button>
          <button>se connecter</button>
          <button>vends tes articles</button>
        </nav>
      </div>
    </>
  );
};

export default Header;
