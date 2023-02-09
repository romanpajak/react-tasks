import React from "react";
import { useParams } from "react-router-dom";
import { users } from "../users/users";

function UserPage() {
  let { userId } = useParams();
  let userName;
  if (userId) {
    userName = users[parseInt(userId) - 1].user;
  }

  return (
    <div className="container">
      <p>User name: {userName}</p>
    </div>
  );
}

export default UserPage;
