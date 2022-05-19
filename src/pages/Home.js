import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { ListGroup } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.js';

function Home(props) {
  return (
    <div>
      <h1>Home Page of all NBA Teams</h1>
      <h2>Eastern Conference</h2>
      {props.teams && (
        <ListGroup>
          {props.teams.map((team) => {
            if (team.conference === "East") {
              return (
                <Link to={`/${team.abbreviation}`}>
                  <ListGroup.Item
                    className="east"
                    variant={team.abbreviation}
                    id={team.abbreviation}
                    key={team.abbreviation}
                  >
                    {team.full_name}
                  </ListGroup.Item>
                </Link>
              );
            } else {
              return ""; // need a return even if it doesnt return anything
            }
          })}
        </ListGroup>
      )}
      <h2>Western Conference</h2>
      {props.teams && (
        <ListGroup>
          {props.teams.map((team) => {
            if (team.conference === "West") {
              return (
                <Link to={`/${team.abbreviation}`}>
                  <ListGroup.Item
                    className="west"
                    variant={team.abbreviation}
                    id={team.abbreviation}
                    key={team.abbreviation}
                  >
                    {team.full_name}
                  </ListGroup.Item>
                </Link>
              );
            } else {
              return ""; // need a return even if it doesnt return anything
            }
          })}
        </ListGroup>
      )}
    </div>
  );
}

export default Home;
