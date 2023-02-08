import React from "react";
import { users } from "../users/users";
import { Link } from "react-router-dom";
import UserPage from "./UserPage";
function Details() {
  let userList = users.map((item) => {
    return (
      <p>
        <Link to={`user${item.id}`}>{item.user}</Link>
      </p>
    );
  });

  return (
    <>
      <div className="container">
        <h2 className="page-title"> This is the Details page </h2>
        <h3>See our users</h3>
        {userList}
      </div>
    </>
  );
}
export default Details;
