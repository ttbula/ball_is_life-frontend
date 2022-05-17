import React, { useEffect, useState } from "react";

function Rosters() {
  const url =
    "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/players";
  const [list, setList] = useState();
  async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    setList(data.data);
    console.log(data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    //FIXME: Running into too many requests. need to save information into mongoDB
    <div>
      <h1>Test Page</h1>
      <h2>Eastern Conference</h2>
      {list && (
        <>
          {list.map((team, index) => {
            if (team.conference === "East") {
              return <div key={index}>{team.full_name}</div>;
            }
          })}
        </>
      )}
      <h2>Western Conference</h2>
      {list && (
        <>
          {list.map((team, index) => {
            if (team.conference === "West") {
              return <div key={index}>{team.full_name}</div>;
            }
          })}
        </>
      )}
    </div>
  );
}

export default Rosters;
