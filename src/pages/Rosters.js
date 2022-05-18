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
      <h1>{team.city}</h1>
    </div>
  );
}

export default Rosters;
