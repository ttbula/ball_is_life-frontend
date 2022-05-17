import React, { useEffect, useState } from "react";
// const cors = require("cors");

function Home() {
  const url =
    "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/teams";
  //   const url = "https://balldontlie.io/api/v1/players?page=151";
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
    <div>
      <h2>Home Page of all Teams</h2>
      {list && (
        <>
          {list.map((team, index) => {
            return <div key={index}>{team.full_name}</div>;
          })}
        </>
      )}
    </div>
  );
}

export default Home;
