import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Rosters(props) {
  const url =
    "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/teams";
  const [list, setList] = useState();
  async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    setList(data.data);
    console.log(data.data);
  }

  let { abbreviation } = useParams();
  console.log(abbreviation);

  useEffect(() => {
    fetchData();
  }, []);

  return <>{list && <>{list.abbreviation}</>}</>;
}

export default Rosters;
