import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Stack, Col } from "react-bootstrap";

function Rosters(props) {
  let { abbreviation } = useParams();
  console.log(abbreviation);

  function findArrayElementByAbbreviation(array, abbreviation) {
    return array.find((element) => {
      return element.abbreviation === abbreviation;
    });
  }
  let team = findArrayElementByAbbreviation(props.teams, abbreviation);
  console.log(`THIS IS OUR TEAM${team}`);
  console.log(`THIS IS OUR IMAGE LINK${props.teamImages.abbreviation}`);

  return (
    <div className="body-page">
       <h1>{team.full_name}</h1>
       <h2>Division: {team.division}</h2>
       <h2>City: {team.city}</h2>
       <h2>Conference: {team.conference}ern conference</h2>
       <div className="test">
        <img src={props.teamImages[abbreviation]} alt={abbreviation} />
      </div>
    </div>
  );
}

export default Rosters;
