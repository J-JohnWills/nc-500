import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Review() {
  const [nameInput, setNameInput] = useState("");
  const [reviewInput, setReviewInput] = useState("");
  let params = useParams();
  let navigate = useNavigate();

  const addReview = async () => {
    const query = {
      reviewer: nameInput,
      review: reviewInput,
    };

    // Check to see if input is empty
    if (query.review.length <= 0 || query.reviewer.length <= 0) {
      // TODO: quit out, show alert or something
      alert("You need to fill out all fields.");
    } else {
      await fetch("http://localhost:3000/hostels/review/" + params.hostelId, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // mode: "no-cors",
        body: JSON.stringify(query),
      });
      navigate("/hostels/" + params.hostelId);
    }
  };

  const handleName = (e) => {
    setNameInput(e.currentTarget.value);
  };

  const handleReview = (e) => {
    setReviewInput(e.currentTarget.value);
  };

  return (
    <div>
      <h1>Leave a review for this hostel</h1>
      <Form>
        <Form.Group className="mb-3" controlId="nameInput">
          {" "}
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name here..."
            onChange={handleName}
            value={nameInput}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="reviewInput">
          <Form.Label>Review</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            onChange={handleReview}
            required
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
