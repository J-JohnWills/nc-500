import React, { useContext, useEffect, useReducer, useState } from "react";
import { ItinerariesContext } from "./ItinerariesPlanner";
import { getDistance } from "geolib";

export default function ItinerariesSummary() {
  const { itinerary } = useContext(ItinerariesContext);

  return (
    <div style={{ borderTop: "black solid 1px", display: "flex", padding: 25 }}>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          maxHeight: 150,
          "& li": { width: 200 },
        }}
      >
        {itinerary.map(({ name, id, location }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <button>Finalise Trip</button>
    </div>
  );
}
