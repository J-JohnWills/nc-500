import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export default function ItinerariesNewForm({ hostelList, addStarts }) {
  const [startDate, setStartDate] = useState(new Date());
  const [startingHostel, setStartingHostel] = useState("");
  let navigate = useNavigate();

  console.log("hostelList :", hostelList);

  let selectItems = hostelList.map((hostel) => (
    <option key={hostel.id}>{hostel.name}</option>
  ));
  console.log(selectItems);

  const handleDateSelect = (e) => {
    setStartDate(e.currentTarget.value);
    console.log("startDate: ", startDate);
  };

  const handleHostelSelect = (e) => {
    setStartingHostel(e.currentTarget.value);
    console.log("starting hostel :", startingHostel);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    addStarts(startDate, startingHostel);
  };

  function addStages() {
    const starts = {
      startDate: startDate,
      startingHostel: startingHostel,
    };
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formStartDate">
        <Form.Label>Choose a start date</Form.Label>
        <Form.Control
          aria-label="Select start date"
          type="date"
          value={startDate.toUTCString}
          onChange={handleDateSelect}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formStartLocation">
        <Form.Label>Choose a starting hostel</Form.Label>
        <Form.Select
          aria-label="Select starting hostel"
          value={startingHostel}
          onChange={handleHostelSelect}
        >
          {selectItems}
        </Form.Select>
      </Form.Group>
      <Button
        variant="primary"
        onClick={() => {
          handleSubmit();
        }}
      >
        Add stages
      </Button>
    </Form>
  );
}
