import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <ul>
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
  );
}
export default Home;
