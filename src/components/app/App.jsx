import { Link, Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../../bootstrap_flatly.css";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand>NC 500</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navber-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link> | <Link to="/hostels">Hostels</Link> |{" "}
              <Link to="/itineraries">Itineraries</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default App;
