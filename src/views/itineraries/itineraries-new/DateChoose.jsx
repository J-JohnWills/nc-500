import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function DateChoose() {
  let navigate = useNavigate();
  const [nameInput, setNameInput] = useState("");
  const [dateInput, setDateInput] = useState(new Date());

  return (
    <div>
      <h1>Date choose</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Enter Your name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name here..."
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Choose A Starting Date</Form.Label>
          <Form.Control type="date"></Form.Control>
        </Form.Group>
        <Button className="mt-3">Add stages</Button>
      </Form>
    </div>
  );
}
