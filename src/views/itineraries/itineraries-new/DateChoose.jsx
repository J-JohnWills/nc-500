import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Outlet, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import datasource from "../../../data/data";

export default function DateChoose() {
  const [nameInput, setNameInput] = useState("");
  const [dateInput, setDateInput] = useState(new Date());

  const handleName = (e) => {
    setNameInput(e.currentTarget.value);
    console.log(nameInput);
  };

  const handleDate = (e) => {
    setDateInput(e.currentTarget.value);
    console.log(dateInput);
  };

  // TODO: Add check for empty fields
  const addItinerary = async () => {
    const name = nameInput;
    await fetch(datasource.baseURL + "/itineraries/new/" + name)
      .then((res) => res.json())
      .then((data) => {
        const startDate = data.startdate;
        addStartDate(dateInput, name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addStartDate = async (startDate, user) => {
    await fetch(
      datasource.baseURL + "/itineraries/startdate/" + user + "/" + startDate
    )
      .then((res) => res.json())
      .then((data) => {})
      .catch((err) => {});
  };

  return (
    <div>
      <h1>Date choose</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Enter Your name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name here..."
            onChange={handleName}
            value={nameInput}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Choose A Starting Date</Form.Label>
          <Form.Control
            type="date"
            value={dateInput}
            onChange={handleDate}
          ></Form.Control>
        </Form.Group>
        <LinkContainer to={`/itineraries/view`}>
          <Button
            className="mt-3"
            variant="success"
            onClick={() => {
              addItinerary();
            }}
          >
            Add Stages And Edit Your Trip
          </Button>
        </LinkContainer>
      </Form>
      <Outlet />
    </div>
  );
}
