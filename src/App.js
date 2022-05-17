import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Player from "./pages/Player";
import Rosters from "./pages/Rosters";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const URL = "https://ballis-life.herokuapp.com/";
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/"> Create Player </Link>
        <Link to="/rosters"> Test </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home URL={URL} />} />
        <Route path="/player/:playername" element={<Player />} />
        <Route path="/rosters" element={<Rosters URL={URL} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div className="footer">Footer Info</div>
    </Router>
  );
}

export default App;
