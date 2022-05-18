import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const URL =
    "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/teams";
  // const [list, setList] = useState();
  const [list, setList] = useState(null);

  function getTeams() {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setList(res.data));
  }

  useEffect(() => {
    getTeams();
  }, []);

  if (list === null) {
    return <h1>Loading</h1>;
  }

  // async function fetchData() {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setList(data.data);
  //   console.log(data.data);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <h1>Home Page of all NBA Teams</h1>
      <h2>Eastern Conference</h2>
      {list && (
        <>
          {list.map((team, index) => {
            if (team.conference === "East") {
              return (
                <Link to={`/${team.abbreviation}`}>
                  <div key={index}>{team.full_name}</div>
                </Link>
              );
            }
          })}
        </>
      )}
      <h2>Western Conference</h2>
      {list && (
        <>
          {list.map((team, index) => {
            if (team.conference === "West") {
              return (
                <Link to={`/${team.abbreviation}`}>
                  <div key={index}>{team.full_name}</div>
                </Link>
              );
            }
          })}
        </>
      )}
    </div>
  );
}

export default Home;
