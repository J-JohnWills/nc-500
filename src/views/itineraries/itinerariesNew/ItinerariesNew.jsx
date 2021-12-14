import React, { useState } from "react";
import ItinerariesNewForm from "../itinerariesNewForm/ItinerariesNewForm";

export default function ItinerariesNew({ hostelList }) {
  const [starts, setStarts] = useState({
    startDate: new Date(),
    startingHostel: "",
  });

  function addStarts(date, hostel) {
    // TODO: code for setting the starts state object, then navigating to the add stages
    console.log(date, hostel);
  }

  return (
    <div>
      <h1>New trip!</h1>
      <ul>
        <li>Create an itinerary for their trip</li>
        <li>Setting a start date</li>
        <li>Setting the number of stages</li>
        <li>Each stage will specify a hostel and number of nights to stay</li>
        <li>
          Will be able to change or delete a specified stage of the itinerary
        </li>
        <li>
          Should be able to view the itinerary, including the distance between
          each stage and total distance to travel
        </li>
      </ul>
      <ItinerariesNewForm hostelList={hostelList} addStarts={addStarts} />
    </div>
  );
}