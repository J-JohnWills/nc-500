import React, { useEffect, useState } from "react";
import ItinerariesList from "./ItinerariesList";

export default function Itineraries() {
  const [itineraries, setItineraries] = useState([]);
  // http://localhost:3000/itineraries
  useEffect(() => {
    async function getItineraries() {
      const res = await fetch("http://localhost:3000/itineraries");
      const data = await await res.json();
      setItineraries(data);
      console.log("itineraries: ", itineraries);
      console.log("data: ", data);
    }
    getItineraries();
  }, [ItinerariesList]);

  return (
    <div>
      <h1>Itineraries</h1>
      {itineraries.map((itinerary) => (
        <ItinerariesList itinerariesIn={itinerary} />
      ))}
    </div>
  );
}
