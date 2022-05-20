import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.css";

function ShowCustomPlayer(props) {
  console.log(props);
  const navigate = useNavigate();
  const { id } = useParams();
  const players = props.player;
  console.log(`the players are: ${players}`);
  const player = players.find((p) => p._id === id);
  console.log(`The player is: ${player}`);

  const [editForm, setEditForm] = useState(player);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  // handlesubmit for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.updatePlayer(editForm, id);
    // redirect people back to index
    navigate("/player");
  };

  const removePlayer = () => {
    props.deletePlayer(id);
    navigate("/player");
  };

  return (
    <div className="body-page">
      <h2>
        {player.first_name} {player.last_name}'s
      </h2>
      <h2 class="waviy">
        <span> I</span>
        <span>n</span>
        <span>f</span>
        <span>o </span>
        <span>P</span>
        <span>a</span>
        <span>g</span>
        <span>e</span>
      </h2>
      <div className="customPlayer">
        <h2>First Name: {player.first_name}</h2>
        <h2>Last Name: {player.last_name}</h2>
        <h2>Position: {player.position}</h2>
        <h2>Team: {player.team}</h2>
        <h2>Rating: {player.rating}</h2>
      </div>
      <button id="delete" onClick={removePlayer} className="buttonDelete">
        DELETE CUSTOM PLAYER
      </button>
      <form onSubmit={handleSubmit}>
        <div className="createTable">
          <input
            type="text"
            value={editForm.first_name}
            name="first_name"
            placeholder="first_name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.last_name}
            name="last_name"
            placeholder="last name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.position}
            name="position"
            placeholder="position"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.rating}
            name="rating"
            placeholder="rating"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.team}
            name="team"
            placeholder="team"
            onChange={handleChange}
          />
          <input id="update-player" type="submit" value="Update Custom Player" />
        </div>
      </form>
    </div>
  );
}

export default ShowCustomPlayer;
