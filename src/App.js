import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Player from "./pages/Player";
import Rosters from "./pages/Rosters";
import ErrorPage from "./pages/ErrorPage";
import Nav from "./components/Nav";
import React, { useState, useEffect } from "react";

function App() {
  //FIXME: how would we go about requesting from api when players information is spread accross multiple route pages
  // const URL =
  //   "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/teams";
  const URL = "https://balldontlie.io/api/v1/teams";
  // const [list, setList] = useState();
  const [teams, setTeams] = useState(null);

  function getTeams() {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setTeams(res.data));
  }

  useEffect(() => {
    getTeams();
  }, []);

  if (setTeams === null) {
    return <h1>Loading</h1>;
  }

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home URL={URL} teams={teams} />} />
        <Route path="/player" element={<Player />} />
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
