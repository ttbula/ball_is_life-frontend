import React, { useState, useEffect } from "react";

function Player() {
  const [players, setPlayers] = useState([]);

  function getPages() {
    // FIXME: prints out 2
    for (let i = 1; i <= 9; i++) {
      const baseUrl = `https://balldontlie.io/api/v1/players/?page=${i}`;
      fetch(baseUrl)
        .then((res) => res.json())
        .then((res) => setPlayers((prevplayers) => [...prevplayers, res.data]));
      // .then((res) => setPlayers([...players, res.data]));
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
    <div>
      {players && (
        <>
          {players.map((each, index) => {
            return each.map((player) => {
              return (
                <div>
                  <p>
                    Full Name {player.first_name} {player.last_name}
                  </p>
                </div>
              );
            });
          })}
        </>
      )}
    </div>
  );
}

export default Player;
// {players.map((player, index) => {
//   return <div key={player.id}>{player.first_name}</div>;
// })}
