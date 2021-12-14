import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function ItinerariesNewForm({ hostelList }) {
  const [startDate, setStartDate] = useState(new Date());
  const [startingHostel, setStartingHostel] = useState("");

  // populate the select input with values
  let selectItems = hostelList.map((hostel) => (
    <option key={hostel.id}>{hostel.name}</option>
  ));

  const handleDateSelect = (e) => {
    setStartDate(e.currentTarget.value);
  };

  const handleHostelSelect = (e) => {
    setStartingHostel(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // addStarts(startDate, startingHostel);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formStartDate">
        <Form.Label>Choose a start date</Form.Label>
        <Form.Control
          aria-label="Select start date"
          type="date"
          value={startDate}
          onChange={handleDateSelect}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formStartLocation">
        <Form.Label>Choose a starting hostel</Form.Label>
        <Form.Select
          aria-label="Select starting hostel"
          onChange={handleHostelSelect}
        >
          Choose from the list
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
