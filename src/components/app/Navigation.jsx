import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="dark" expand="md">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>NC 500</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navber-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/hostels">
              <Nav.Link>Hostels</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/itineraries">
              <Nav.Link>Itineraries</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
