import React, { useCallback, useEffect, useState } from "react";
import ItineraryCard from "./ItineraryCard";
import Row from "react-bootstrap/Row";
import datasource from "../../../data/data";

export default function ItinerariesView({ hostelList }) {
  const [itinerariesList, setItinerariesList] = useState([]);

  const fetchItineraries = useCallback(() => {
    fetch(datasource.baseURL + "/itineraries")
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
      {itinerariesList.map((item) => (
        <ItineraryCard itinerary={item} />
      ))}
    </Row>
  );
}
