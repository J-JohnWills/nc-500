import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

export default function NavbarTop() {
  return (
    <Navbar
      expand="lg"
      variant="light"
      bg="light"
      sticky="top"
      className="mb-3"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>NC 500</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
