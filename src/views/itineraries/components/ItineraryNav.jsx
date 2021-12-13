import React from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

export default function ItineraryNav() {
  return (
    <Nav className="flex-column" variant="secondary">
      <LinkContainer to="/itineraries">
        <Nav.Link>View Trips</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/itineraries/new">
        <Nav.Link>Plan A New Trip</Nav.Link>
      </LinkContainer>
    </Nav>
  );
}
