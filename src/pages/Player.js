import React from "react";
import { useParams } from "react-router-dom";

function Player() {
  let { playername } = useParams();
  return (
    <div>
      <h2>This is {playername}'s personal page</h2>
    </div>
  );
}

export default Player;
