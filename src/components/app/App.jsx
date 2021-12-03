import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>NC 500</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/hostels">Hostels</Link> |{" "}
        <Link to="/itineraries">Itineraries</Link>
      </nav>
    </div>
  );
}

export default App;
