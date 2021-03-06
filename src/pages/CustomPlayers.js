import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Stack, Col, Row } from "react-bootstrap";

function CustomPlayers(props) {
  // state to hold formData

  const [newForm, setNewForm] = useState({
    first_name: "",
    last_name: "",
    position: "",
    rating: "",
    team: "",
  });

  // handleChange function for form
  //TODO:
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createPlayers(newForm);
    setNewForm({
      first_name: "",
      last_name: "",
      position: "",
      rating: "",
      team: "",
    });
  };

  console.log(props);
  const loaded = () => {
    const water = props.player.map((eachPlayer) => {
      console.log(eachPlayer.team);
      if (eachPlayer.team.toLowerCase() === "water") {
        return (
          <div key={eachPlayer._id} className="person">
            <Link to={`/player/${eachPlayer._id}`}>
              <h2 className="water-player">
                Player: {eachPlayer.first_name} {eachPlayer.last_name}
              </h2>
            </Link>

            <div className="playerData">
              <h5>Team: {eachPlayer.team}</h5>
              <h5>This player plays the {eachPlayer.position} position</h5>
              <h5>This player has a rating of: {eachPlayer.rating}</h5>
            </div>
            <br></br>
            <br></br>
          </div>
        );
      } else {
        return "";
      }
    });
    return water;
  };

  const loaded2 = () => {
    const fire = props.player.map((eachPlayer) => {
      console.log(eachPlayer.team);
      if (eachPlayer.team.toLowerCase() !== "water") {
        return (
          <div key={eachPlayer._id} className="person">
            <Link to={`/player/${eachPlayer._id}`}>
              <h2 className="fire-player">
                Player: {eachPlayer.first_name} {eachPlayer.last_name}
              </h2>
            </Link>

            <div className="playerData">
              <h5>Team: {eachPlayer.team}</h5>
              <h5>This player plays the {eachPlayer.position} position</h5>
              <h5>This player has a rating of: {eachPlayer.rating}</h5>
            </div>
            <br></br>
            <br></br>
          </div>
        );
      } else {
        return "";
      }
    });
    return fire;
  };

  const loading = () => {
    return <h1>Loading.........</h1>;
  };

  return (
    <section className="body-page">
      <h1 className="water">Water Team</h1>
      {props.player ? loaded() : loading()}
      <br></br>
      <br></br>
      <h1 className="fire">Fire Team (Instructors)</h1>
      {props.player ? loaded2() : loading()}
      <br></br>
      <br></br>
      <form className="create-player" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.first_name}
          name="first_name"
          placeholder="first_name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.last_name}
          name="last_name"
          placeholder="last_name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.position}
          name="position"
          placeholder="position"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.rating}
          name="rating"
          placeholder="rating"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.tean}
          name="team"
          placeholder="team"
          onChange={handleChange}
        />
        <input id="create-button" type="submit" value="Create Player" />
      </form>
    </section>
  );
}

export default CustomPlayers;
