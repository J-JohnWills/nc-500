import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ItineraryNav from "../components/ItineraryNav";
import ItinerariesList from "../ItinerariesList/ItinerariesList";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Itineraries({ hostelList }) {
  const [itineraries, setItineraries] = useState([]);
  const [hostels, setHostels] = useState([]);
  useEffect(() => {
    async function getItineraries() {
      const res = await fetch("http://localhost:3000/itineraries");
      const data = await await res.json();
      setItineraries(data);
      setHostels(hostelList);
    }
    getItineraries();
  }, [hostelList]);

  return (
    <Container>
      <Row>
        <Col>
          Col 1<ItineraryNav />
        </Col>
        <Col>
          Col 2
          <Outlet />
        </Col>
      </Row>

      {/* {itineraries.map((itinerary) => (
        <ItinerariesList itinerariesIn={itinerary} />
      ))} */}
    </Container>
  );
}
