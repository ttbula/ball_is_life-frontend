import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Player() {
  const [players, setPlayers] = useState([]);

  function getPages() {
    for (let i = 1; i <= 10; i++) {
      const baseUrl = `https://balldontlie.io/api/v1/players/?page=${i}`;
      fetch(baseUrl)
        .then((res) => res.json())
        .then((res) => setPlayers(res.data));
    }
  }
  useEffect(() => {
    getPages();
  }, []);
  console.log(players);

  // async function getPages() {
  //   // set some variables
  //   const baseUrl = `https://balldontlie.io/api/v1/players/?page=`;
  //   let page = 1;
  //   // create empty array where we want to store the people objects for each loop
  //   let people = [];
  //   // create a lastResult array which is going to be used to check if there is a next page
  //   let lastResult = [];
  //   do {
  //     // try catch to catch any errors in the async api call
  //     try {
  //       // use node-fetch to make api call
  //       const resp = await fetch(`${baseUrl}${page}`);
  //       const data = await resp.json();
  //       lastResult = data;
  //       data.data.forEach((person) => {
  //         // destructure the person object and add to array
  //         const { first_name, last_name, position } = person;
  //         const team = person.team.full_name;
  //         people.push({ first_name, last_name, position, team });
  //       });
  //       // increment the page with 1 on each loop
  //       page++;
  //     } catch (err) {
  //       console.error(`Oops, something is wrong ${err}`);
  //     }
  //     // keep running until there's no next page
  //   } while (lastResult.meta.next_page < 6);
  //   // let's log out our new people array
  //   console.log(people);
  //   // return people;
  // }

  // console.time("Time my API call");
  // let players = getPages();
  // console.log(players);
  // console.timeEnd("Time my API call");
  // return (
  //   <div>
  //     {players.map((player) => {
  //       return <h3>{player}</h3>;
  //     })}
  //   </div>
  // );

  return (
    <div>
      {players && (
        <>
          {players.map((player) => {
            return <div>{player.first_name}</div>;
          })}
        </>
      )}
    </div>
  );
}

export default Player;
