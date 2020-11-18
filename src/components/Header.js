import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = ({ token, setUser }) => {
  return (
    <div>
      {token ? (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <>
          <div className="Header">
            <Link className="BackHome" to="/">
              <img src={logo} alt="logo-vinted" />
            </Link>
            <nav>
              <Link className="CreateAcct" to="/signup">
                Créer un compte
              </Link>
              <Link className="login" to="/login">
                Se connecter
              </Link>{" "}
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;

{
  /* <div className="Header">
        <img src={logo} alt="logo-vinted" />
        <nav>
          <button>s'inscrire</button>
          <button>se connecter</button>
          <button>vends tes articles</button>
        </nav>
      </div> */
}
