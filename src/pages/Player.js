import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ListGroup } from "react-bootstrap";

function Player() {
  const [players, setPlayers] = useState([]);

  function getPages() {
    for (let i = 1; i <= 9; i++) {
      const baseUrl = `https://balldontlie.io/api/v1/players/?page=${i}`;
      fetch(baseUrl)
        .then((res) => res.json())
        .then((res) => setPlayers((prevplayers) => [...prevplayers, res.data]));
    }
  }
  useEffect(() => {
    getPages();
  }, []);
  console.log(players);

  if (setPlayers === null) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="body-page">
      <h1>A random list of NBA players from 1979-Current</h1>
      <br></br>
      {players && (
        <div className="all-players">
          {players.map((each, index) => {
            return each.map((player) => {
              return (
                <div className="nba-players">
                  <p className="nba-players">
                    {player.first_name} {player.last_name}: Played for the{" "}
                    {player.team.full_name}
                  </p>
                  <br></br>
                </div>
              );
            });
          })}
        </div>
      )}
    </div>
  );
}

export default Player;
