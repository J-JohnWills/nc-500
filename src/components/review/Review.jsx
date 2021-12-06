import React, { useCallback, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate, useParams } from "react-router";

export default function Review() {
  let navigate = useNavigate();
  const hostelId = useParams();
  let id = hostelId.hostelId;

  console.log(id);
  const [userInput, setUserInput] = useState([
    {
      reviwer: "",
      review: "",
    },
  ]);

  const addReview = async () => {
    const res = await fetch("http://localhost:8000/hostels/review/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: {
        reviwer: "Jamie",
        review: "test test test please work plz",
      },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Review</h1>
      <Form>
        <Form.Group className="mb-3" controlId="nameInput">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name here..."
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="reviewInput">
          <Form.Label>Review</Form.Label>
          <Form.Control as="textarea" rows={4}></Form.Control>
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            navigate("/hostels");
            addReview();
          }}
        >
          Submit Review
        </Button>
      </Form>
    </div>
  );
}
