import { toBeEnabled } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Rosters(props) {
  let { abbreviation } = useParams();
  console.log(abbreviation);

  function findArrayElementByAbbreviation(array, abbreviation) {
    return array.find((element) => {
      return element.abbreviation === abbreviation;
    });
  }
  let team = findArrayElementByAbbreviation(props.teams, abbreviation);
  console.log(team);

  return (
    <div>
      <h1>{team.full_name}</h1>
      <h2>City: {team.city}</h2>
      <h2>Division: {team.division}</h2>
      <h2>Conference: {team.conference}ern conference</h2>
    </div>
  );
}

export default Rosters;
