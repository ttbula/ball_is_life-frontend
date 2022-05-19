import React, { useState } from "react";
import { Link } from "react-router-dom";

function CustomPlayers(props) {
  console.log(props);
  const loaded = () => {
    return props.player.map((eachPlayer) => (
      <div key={eachPlayer._id} className="person">
        <Link to={`/player/${eachPlayer._id}`}>
          <h1>
            Player: {eachPlayer.first_name} {eachPlayer.last_name}
          </h1>
          <h3>This player plays the {eachPlayer.position} position</h3>
        </Link>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading.........</h1>;
  };

  return props.player ? loaded() : loading();
}

export default CustomPlayers;
