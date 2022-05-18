import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  console.log(props.teams);
  return (
    <div>
      <h1>Home Page of all NBA Teams</h1>
      <h2>Eastern Conference</h2>
      {props.teams && (
        <>
          {props.teams.map((team, index) => {
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
      {props.teams && (
        <>
          {props.teams.map((team, index) => {
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
