import React, { useReducer, createContext } from "react";
import { Outlet } from "react-router-dom";
import ItineraryNav from "./ItineraryNav";

export default function Itineraries() {
  return (
    <div>
      <ItineraryNav />
      <Outlet />
    </div>
  );
}
