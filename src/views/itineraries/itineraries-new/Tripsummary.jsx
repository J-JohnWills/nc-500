import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Tripsummary({ hostel }) {
  return (
    <Row>
      <Col>
        <h1>Your trip summary</h1>
        {hostel.map((e) => (
          <div>
            <p>{e.name}</p>
          </div>
        ))}
      </Col>
      <Col>
        <button>finalise</button>
        <p>Starting hostel: </p>
      </Col>
    </Row>
  );
}
