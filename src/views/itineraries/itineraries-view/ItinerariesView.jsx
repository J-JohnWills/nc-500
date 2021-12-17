import React, { useCallback, useEffect, useState } from "react";
import Itinerary from "./Itinerary";

export default function ItinerariesView({ hostelList }) {
  const [itinerariesList, setItinerariesList] = useState([]);

  const fetchItineraries = useCallback(() => {
    fetch("http://localhost:3000/itineraries")
      .then((res) => res.json())
      .then((data) => {
        const datalist = data;
        setItinerariesList(datalist);
        console.log("fetchItineraries() :", datalist);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchItineraries();
  }, []);

  return (
    <div>
      <h1>View Itineraries</h1>
      {itinerariesList.map((item) => (
        <Itinerary itineraryIn={item} />
      ))}
    </div>
  );
}
