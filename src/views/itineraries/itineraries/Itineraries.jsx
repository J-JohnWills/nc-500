import React from "react";
import { Outlet } from "react-router-dom";
import ItineraryNav from "./ItineraryNav";

export default function Itineraries({ hostelList }) {
  return (
    <div>
      <ItineraryNav />
      <Outlet />
    </div>
  );
}
