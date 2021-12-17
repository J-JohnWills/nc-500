import React from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

export default function ItineraryNav() {
  return (
    <Nav>
      <LinkContainer to="/itineraries/view">
        <Nav.Link>View Itineraries</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/itineraries/new">
        <Nav.Link>New Itinerary</Nav.Link>
      </LinkContainer>
    </Nav>
  );
}
