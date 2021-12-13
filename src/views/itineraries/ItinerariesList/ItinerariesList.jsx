import React from "react";

export default function ItinerariesList({ itinerariesIn }) {
  return (
    <div>
      <h2>{itinerariesIn.user}</h2>
      <h3>{itinerariesIn.startdate}</h3>
      {itinerariesIn.stages.map((stage) => (
        <div>
          <h4>Stage: {stage.stage}</h4>
          <h4>Hostel: {stage.hostel}</h4>
          <h4>Nights: {stage.nights}</h4>
        </div>
      ))}
    </div>
  );
}
