import React from "react";
import ItineraryNav from "../components/ItineraryNav";
import Container from "react-bootstrap/Container";
import "./ItinerariesIndex.css";

export default function ItinerariesIndex() {
  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3 header">
        <h1>Itineraries</h1>
      </Container>
    </Container>
  );
}
