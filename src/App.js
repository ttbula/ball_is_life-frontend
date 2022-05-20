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
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const teamImages = {
    ATL: "https://teamcolorcodes.com/wp-content/uploads/2015/02/atlanta_hawks_logo-300x300.jpg?ezimgfmt=ng:webp/ngcb9",
    BOS: "https://teamcolorcodes.com/wp-content/uploads/2015/02/boston_celtics_logo-270x300.jpg?ezimgfmt=ng:webp/ngcb9",
    BKN: "https://teamcolorcodes.com/wp-content/uploads/2017/03/brooklyn_nets_logo-227x300.jpg?ezimgfmt=ng:webp/ngcb9",
    CHA: "https://teamcolorcodes.com/wp-content/uploads/2017/02/charlotte_hornets_logo-300x290.jpg?ezimgfmt=ng:webp/ngcb9",
    CHI: "https://teamcolorcodes.com/wp-content/uploads/2017/02/chicago_bulls_logo-297x300.jpg?ezimgfmt=ng:webp/ngcb9",
    CLE: "https://teamcolorcodes.com/wp-content/uploads/2017/02/2017_cavaliers_logo-208x300.png?ezimgfmt=ng:webp/ngcb9",
    DAL: "https://teamcolorcodes.com/wp-content/uploads/2017/03/dallas_mavericks_logo-289x300.jpg?ezimgfmt=ng:webp/ngcb9",
    DEN: "https://teamcolorcodes.com/wp-content/uploads/2017/03/nuggets_logo_colors.png?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    DET: "https://teamcolorcodes.com/wp-content/uploads/2017/03/detroit_pistons_logo-1-300x300.jpg?ezimgfmt=ng:webp/ngcb9",
    GSW: "https://teamcolorcodes.com/wp-content/uploads/2017/03/GSW-1-248x300.png?ezimgfmt=ng:webp/ngcb9",
    HOU: "https://teamcolorcodes.com/wp-content/uploads/2017/03/houston_rockets_logo.jpg?ezimgfmt=ng:webp/ngcb9",
    IND: "https://teamcolorcodes.com/wp-content/uploads/2017/03/indiana_pacers_logo.jpg?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    LAC: "https://teamcolorcodes.com/wp-content/uploads/2017/03/los_angeles_clippers_logo-300x228.jpg?ezimgfmt=ng:webp/ngcb9",
    LAL: "https://teamcolorcodes.com/wp-content/uploads/2017/03/los_angeles_lakers_logo-300x185.jpg?ezimgfmt=ng:webp/ngcb9",
    MEM: "https://teamcolorcodes.com/wp-content/uploads/2017/03/Memphis_Grizzlies_logo_2018-249x300.png?ezimgfmt=ng:webp/ngcb9",
    MIA: "https://teamcolorcodes.com/wp-content/uploads/2017/03/miami_heat_logo_colors.png?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    MIL: "https://teamcolorcodes.com/wp-content/uploads/2017/03/milwaukee_bucks_logo-242x300.jpg?ezimgfmt=ng:webp/ngcb9",
    MIN: "https://teamcolorcodes.com/wp-content/uploads/2017/03/minnesota_timberwolves_logo.jpg?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    NOP: "https://teamcolorcodes.com/wp-content/uploads/2015/06/new_orleans_pelicans_logo.jpg?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    NYK: "https://teamcolorcodes.com/wp-content/uploads/2017/03/knicks_logo_colors-300x244.png?ezimgfmt=ng:webp/ngcb9",
    OKC: "https://teamcolorcodes.com/wp-content/uploads/2017/03/oklahoma_city_thunder_logo-300x276.jpg?ezimgfmt=ng:webp/ngcb9",
    ORL: "https://teamcolorcodes.com/wp-content/uploads/2017/03/orlando_magic_logo-300x218.jpg?ezimgfmt=ng:webp/ngcb9",
    PHI: "https://teamcolorcodes.com/wp-content/uploads/2017/03/sixers_logo_colors-300x300.png?ezimgfmt=ng:webp/ngcb9",
    PHX: "https://teamcolorcodes.com/wp-content/uploads/2015/03/phoenix_suns_logo.jpg?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    POR: "https://teamcolorcodes.com/wp-content/uploads/2015/03/trailblazers_logo_colors-300x257.jpg?ezimgfmt=ng:webp/ngcb9",
    SAC: "https://teamcolorcodes.com/wp-content/uploads/2015/03/sacramento_kings_logo-263x300.jpg?ezimgfmt=ng:webp/ngcb9",
    SAS: "https://teamcolorcodes.com/wp-content/uploads/2015/03/san_antonio_spurs_logo-300x135.jpg?ezimgfmt=ng:webp/ngcb9",
    TOR: "https://teamcolorcodes.com/wp-content/uploads/2015/03/Toronto-Raptors-Logo-300x300.png?ezimgfmt=ng:webp/ngcb9",
    UTA: "https://teamcolorcodes.com/wp-content/uploads/2015/03/utah_jazz_logo-300x137.jpg?ezimgfmt=ng:webp/ngcb9",
    WAS: "https://teamcolorcodes.com/wp-content/uploads/2015/03/washington_wizards_logo.jpg?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
  };

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
        <Route
          path="/"
          element={<Home URL={URL} teams={teams} teamImages={teamImages} />}
        />
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
          element={<Rosters URL={URL} teams={teams} teamImages={teamImages} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div className="footer">App by Tim & Mohammed</div>
    </Router>
  );
}

export default App;
