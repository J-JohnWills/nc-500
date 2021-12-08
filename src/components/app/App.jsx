import { Link, Outlet, Routes, Route } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../../bootstrap_flatly.css";
import { LinkContainer } from "react-router-bootstrap";
import Navigation from "./Navigation";
import Test from "./Test";

function App() {
  <Routes>
    <Route path="test" element={<Test />} />
  </Routes>;
  return (
    <div>
      <Navigation />
      <Outlet />
      <Link to="/test">test</Link>
    </div>
  );
}

export default App;
