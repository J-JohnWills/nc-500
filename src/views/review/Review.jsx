import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Review() {
  const [userInput, setUserInput] = useState([
    {
      reviewer: "",
      review: "",
    },
  ]);

  const addReview = async () => {
    const query = {
      reviewer: "jamie",
      review: "test test",
    };
    console.log(query);
    const res = await fetch("http://localhost:3000/hostels/review/1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // mode: "no-cors",
      body: JSON.stringify(query),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Leave a review plz thx</h1>
      <Form>
        <Form.Group className="mb-3" controlId="nameInput">
          {" "}
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
            //   navigate("/hostels");
            addReview();
          }}
        >
          Submit Review
        </Button>
      </Form>
    </div>
  );
}
