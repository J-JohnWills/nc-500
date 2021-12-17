import React, { createContext, useReducer } from "react";
import Tripsummary from "./Tripsummary";

function tripReducer(state, action) {
  switch (action.type) {
    case "add":
      const exists = state.find((p) => p.id === action.hostel.id);
      if (exists) {
        alert("you can only pick each hostel once");
        return state;
      }
      return [...state, action.hostel];
    case "remove":
      const hostelIndex = state.findIndex(
        (item) => item.name === action.hostel.name
      );
      console.log("hostelIndex :", hostelIndex);
      if (hostelIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(hostelIndex, 1);
      return update;

    default:
      return state;
  }
}

export default function ItinerariesNew({ hostelList }) {
  const [trip, setTrip] = useReducer(tripReducer, []);

  function add(hostel) {
    setTrip({ hostel, type: "add" });
    console.log("add");
    console.log(trip);
  }

  function remove(hostel) {
    setTrip({ hostel, type: "remove" });
    console.log("remove");
  }
  return (
    <div>
      <h1>Choose your hostels</h1>
      {hostelList.map((hostel) => (
        <div key={hostel.id}>
          <li>{hostel.name}</li>
          <button onClick={() => add(hostel)}>Add</button>
          <button onClick={() => remove(hostel)}>Remove</button>
        </div>
      ))}
      <Tripsummary hostel={trip} />
    </div>
  );
}
