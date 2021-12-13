import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ItineraryNav from "../components/ItineraryNav";
import ItinerariesList from "../ItinerariesList/ItinerariesList";

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
    <div>
      <ItineraryNav />
      <Outlet />
      {itineraries.map((itinerary) => (
        <ItinerariesList itinerariesIn={itinerary} />
      ))}
    </div>
  );
}
