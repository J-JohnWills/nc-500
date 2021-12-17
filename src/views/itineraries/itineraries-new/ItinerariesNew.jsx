import React, { createContext, useReducer, useContext, useEffect } from "react";
import Tripsummary from "./Tripsummary";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import HostelList from "./HostelList";

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
        <HostelList hostel={hostelList} add={add} remove={remove} />
      </Col>
      <Col>
        <Row>
          <Col>
            <Tripsummary hostelIn={trip} />
          </Col>
          <Col></Col>
        </Row>
      </Col>
    </Row>
  );
}
