import React, { useCallback, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Review() {
  const [userInput, setUserInput] = useState([
    {
      reviwer: "",
      review: "",
    },
  ]);

  function handleChange(e) {
    setUserInput(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // addReview(userInput)
    setUserInput("");
  }

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
        <Button variant="primary">Submit Review</Button>
      </Form>
    </div>
  );
}
