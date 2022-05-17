import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Player from "./pages/Player";
import Rosters from "./pages/Rosters";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/"> Create Player </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:playername" element={<Player />} />
        <Route path="/rosters" element={<Rosters />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div className="footer">Footer Info</div>
    </Router>
  );
}

export default App;
