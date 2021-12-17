import React, { createContext, useReducer } from "react";
import ItinerariesBuilder from "./ItinerariesBuilder";
import ItinerariesSummary from "./ItinerariesSummary";
import Container from "react-bootstrap/Container";

export const ItinerariesContext = createContext();

function reducer(state, item) {
  return [...state, item];
}

export default function ItinerariesPlanner() {
  const [itinerary, setItinerary] = useReducer(reducer, []);
  return (
    <Container style={{ border: "black solid 1px", textAlign: "center" }}>
      <p>Itineraries Planner</p>
      <ItinerariesContext.Provider value={{ itinerary, setItinerary }}>
        <ItinerariesBuilder />
        <ItinerariesSummary />
      </ItinerariesContext.Provider>
    </Container>
  );
}
