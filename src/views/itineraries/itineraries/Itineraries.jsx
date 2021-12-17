import React, { useReducer, createContext } from "react";
import { Outlet } from "react-router-dom";
import ItineraryNav from "./ItineraryNav";

export const ItineraryContext = createContext();

function reducer(state, item) {
  return [...state, item];
}

export default function Itineraries({ hostelList }) {
  const [itinerary, setItinerary] = useReducer(reducer, []);
  return (
    <div>
      <ItineraryContext.Provider value={(itinerary, setItinerary)}>
        <ItineraryNav />
        <Outlet />
      </ItineraryContext.Provider>
    </div>
  );
}
