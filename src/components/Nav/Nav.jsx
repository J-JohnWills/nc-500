import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

import React from "react";
import { Navbar } from "react-bootstrap";

export default function NavNew() {
  return (
    <Nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <LinkContainer to="/">
        <Navbar.Brand className="">NC 500 Planner</Navbar.Brand>
      </LinkContainer>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <LinkContainer to="/hostels">
            <Nav.Link className="link-dark">Hostels</Nav.Link>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer to="/itineraries">
            <Nav.Link className="link-dark">Itineraries</Nav.Link>
          </LinkContainer>
        </li>
      </ul>
      <div class="col-md-3 text-end">
        <Button disabled className="btn btn-outline-secondary btn-sm me-3 py-2">
          Login
        </Button>
        <Button disabled className="btn btn-secondary btn-sm me-3 py-2">
          Sign Up
        </Button>
      </div>
    </Nav>
  );
}
