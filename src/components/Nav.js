import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">
        <div class="container">
          <div class="child bounce">
            <img id="jordan" src="./jordan.png" alt="michael jordan dunking" />
          </div>
        </div>
      </Link>
      <Link id="nba-nav" to="/nbaplayers">
        All NBA Players
      </Link>

      <Link id="custom-players-nav" to="/player">
        Custom Players
      </Link>
    </nav>
  );
}

export default Nav;
