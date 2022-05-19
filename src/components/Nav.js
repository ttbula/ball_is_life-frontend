import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Nav() {
  return (
    
    <nav className="nav">

      <Link to="/">
      
        <img
          id="jordan"
          src="https://cdn-icons.flaticon.com/png/512/3177/premium/3177098.png?token=exp=1652929723~hmac=4f1e5574cb2ce34f762e1f63f22948c5"
          alt="michael jordan dunking"
        />
      </Link>
      {/* <Link to="/"> Home </Link> */}
      <Link id="create-link" to="/">
        Create Player
      </Link>
      <Link to="/player">ALL PLAYERS</Link>
    </nav>
  );
}

export default Nav;
