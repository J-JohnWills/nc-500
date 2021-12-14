import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ItineraryNav from "../components/ItineraryNav";
import Container from "react-bootstrap/Container";

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
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3 header">
        <h1>Itineraries</h1>
        <ItineraryNav />
      </Container>
      <Outlet />

      {/* {itineraries.map((itinerary) => (
        <ItinerariesList itinerariesIn={itinerary} />
      ))} */}
    </Container>
  );
}
