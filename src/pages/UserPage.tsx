import React from "react";
import { users } from "../users/users";
type userProp = {
  userId: number;
};
function UserPage({ userId }: userProp) {
  const userName = users[0].user;
  return <p>User name:{userName}</p>;
}

export default UserPage;
