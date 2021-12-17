import React from "react";
import StageView from "./StageView";

export default function Itinerary({ itineraryIn }) {
  return (
    <div>
      <h5>Itinerary</h5>
      <p>{itineraryIn.user}</p>
      <p>{itineraryIn.startdate}</p>
      {itineraryIn.stages.map((item) => (
        <StageView stages={item} />
      ))}
    </div>
  );
}
