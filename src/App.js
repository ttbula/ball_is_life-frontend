import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Player from "./pages/Player";
import Rosters from "./pages/Rosters";
import ErrorPage from "./pages/ErrorPage";
import Nav from "./components/Nav";
import React, { useState, useEffect } from "react";
import CustomPlayers from "./pages/CustomPlayers";
import ShowCustomPlayer from "./pages/ShowCustomPlayer";

function App() {
  const URL = "https://balldontlie.io/api/v1/teams";
  const [teams, setTeams] = useState(null);

  const [player, setPlayer] = useState(null);
  const herokuURL = "https://ballislife0.herokuapp.com/player/";

  function getTeams() {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setTeams(res.data));
  }

  function getPlayers() {
    fetch(herokuURL)
      .then((response) => response.json())
      .then((result) => setPlayer(result));
  }

  const createPlayers = async (player) => {
    // make post request to create people
    await fetch(herokuURL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    });
    // update list of people
    getPlayers();
  };

  const updatePlayer = async (player, id) => {
    // make put request to create people
    await fetch(herokuURL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    });
    // update list of people
    getPlayers();
  };

  const deletePlayer = async (id) => {
    // make delete request to create people
    await fetch(herokuURL + id, {
      method: "delete",
    });
    // update list of people
    getPlayers();
  };

  useEffect(() => {
    getTeams();
  }, []);

  useEffect(() => getPlayers(), []);

  if (setTeams === null) {
    return <h1>Loading</h1>;
  }

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home URL={URL} teams={teams} />} />
        <Route
          path="/player"
          element={
            <CustomPlayers
              herokuURL={herokuURL}
              player={player}
              createPlayers={createPlayers}
            />
          }
        />
        <Route
          path="/player/:id"
          element={
            <ShowCustomPlayer
              player={player}
              updatePlayer={updatePlayer}
              deletePlayer={deletePlayer}
            />
          }
        />
        <Route path="/nbaplayers" element={<Player />} />
        <Route
          path="/:abbreviation"
          element={<Rosters URL={URL} teams={teams} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div className="footer">Tim & Mohammed</div>
    </Router>
  );
}

export default App;
