import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getDistance } from "geolib/es/getPreciseDistance";

export default function Tripsummary({ hostelIn }) {
  const [hostel, setHostel] = useState([]);
  console.log("hostelIn :", hostelIn);

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
      </Col>
    </Row>
  );
}
