import React from "react";
import { useParams } from "react-router-dom";

function Temp() {
  let { userId } = useParams();
  return (
    <div>
      <h2> Temp {userId} </h2>
    </div>
  );
}
export default Temp;
