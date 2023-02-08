import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="container">
      <ul className="links">
        <Link to="home">
          <li>Home Page</li>
        </Link>
        <Link to="about">
          <li>About</li>
        </Link>
        <Link to="details">
          <li>Details</li>
        </Link>
        <Link to="footer">
          <li>Footer</li>
        </Link>
      </ul>
    </div>
  );
}
export default Nav;
