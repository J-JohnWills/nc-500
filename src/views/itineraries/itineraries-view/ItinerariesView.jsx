import React, { useCallback, useEffect, useState } from "react";
import Itinerary from "./Itinerary";
import ItineraryCard from "./ItineraryCard";
import Row from "react-bootstrap/Row";

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
    <Row xs={1} md={2} lg={3} className="g-2">
      <h1>View Itineraries</h1>
      {itinerariesList.map((item) => (
        <ItineraryCard itinerary={item} />
      ))}
    </Row>
  );
}
