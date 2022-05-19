import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.js';

function Home(props) {
  return (
    <div>
      <h1>Home Page of all NBA Teams</h1>
      <h2>Eastern Conference</h2>
      {props.teams && (
        <>
          {props.teams.map((team) => {
            if (team.conference === "East") {
              return (
                <Link to={`/${team.abbreviation}`}>
                  <div className="east" key={team.abbreviation}>
                  {/* <ListGroup> */}
                    {team.full_name}
                  {/* </ListGroup> */}
                  </div>
                </Link>
              );
            } else {
              return ""; // need a return even if it doesnt return anything
            }
          })}
        </>
      )}
      <h2>Western Conference</h2>
      {props.teams && (
        <>
          {props.teams.map((team) => {
            if (team.conference === "West") {
              return (
                <Link to={`/${team.abbreviation}`}>
                  <div className="west" key={team.abbreviation}>
                    {team.full_name}
                  </div>
                </Link>
              );
            } else {
              return ""; // need a return even if it doesnt return anything
            }
          })}
        </>
      )}
    </div>
  );
}

export default Home;
