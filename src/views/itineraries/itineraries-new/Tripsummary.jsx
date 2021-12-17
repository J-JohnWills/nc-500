import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Tripsummary({ hostelIn }) {
  const [hostel, setHostel] = useState([]);
  console.log("hostelIn :", hostelIn);

  function checkIfEmpty(hostelIn) {
    if (hostelIn === 0) {
      return;
    } else {
      return <p>starting hostel: {hostelIn[0].name}</p>;
    }
  }

  return (
    <Row>
      <Col>
        <h1>Your trip summary</h1>
        {hostelIn.map((e) => (
          <div>
            <p>{e.name}</p>
          </div>
        ))}
      </Col>
      <Col>
        <button>finalise</button>
        {/* {checkIfEmpty(hostelIn)} */}
      </Col>
    </Row>
  );
}
