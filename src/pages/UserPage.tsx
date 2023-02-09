import React from "react";
import { useParams } from "react-router-dom";
import { users } from "../users/users";

function UserPage() {
  let { userId } = useParams();
  let userName;
  if (userId) {
    userName = users[parseInt(userId)];
  }

  return (
    <>
      <p>User name:{userName}</p>
    </>
  );
}

export default UserPage;
