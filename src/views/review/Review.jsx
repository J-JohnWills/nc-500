import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Review() {
  const [nameInput, setNameInput] = useState("");
  const [reviewInput, setReviewInput] = useState("");
  const params = useParams();
  console.log("params", params.hostelId);

  const addReview = async () => {
    const query = {
      reviewer: nameInput,
      review: reviewInput,
    };
    console.log(query);
    const res = await fetch(
      "http://localhost:3000/hostels/review/" + params.hostelId,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // mode: "no-cors",
        body: JSON.stringify(query),
      }
    );
    const data = await res.json();
    console.log(data);
  };

  const handleName = (e) => {
    setNameInput(e.currentTarget.value);
    console.log(nameInput);
  };

  const handleReview = (e) => {
    setReviewInput(e.currentTarget.value);
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
            onChange={handleName}
            value={nameInput}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="reviewInput">
          <Form.Label>Review</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            onChange={handleReview}
          ></Form.Control>
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            addReview();
          }}
        >
          Submit Review
        </Button>
      </Form>
    </div>
  );
}
