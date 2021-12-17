import React, { createContext, useReducer, useContext } from "react";
import Tripsummary from "./Tripsummary";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { ToggleButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ItineraryContext } from "../itineraries/Itineraries";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

const reducer = (key) => key + 1;

export default function ItinerariesNew({ hostelList }) {
  let navigate = useNavigate();
  const [trip, setTrip] = useReducer(tripReducer, []);

  function add(hostel) {
    setTrip({ hostel, type: "add" });
  }

  function remove(hostel) {
    setTrip({ hostel, type: "remove" });
  }

  return (
    <Row>
      <Col>
        {" "}
        <h1>Choose your hostels</h1>
        {hostelList.map((hostel) => (
          <div key={hostel.id}>
            <li>{hostel.name}</li>
            <button onClick={() => add(hostel)}>Add</button>
            <button onClick={() => remove(hostel)}>Remove</button>
          </div>
        ))}
        <Button
          onClick={() => {
            navigate("/itineraries/new/details");
          }}
        >
          Finalise your trip
        </Button>
      </Col>
      <Col>
        <Row>
          <Col>
            <Tripsummary hostel={trip} />
          </Col>
          <Col></Col>
        </Row>
      </Col>
    </Row>
  );
}
