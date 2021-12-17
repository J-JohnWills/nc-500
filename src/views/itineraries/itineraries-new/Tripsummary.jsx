import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getDistance } from "geolib/es/getPreciseDistance";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Tripsummary({ hostelIn }) {
  const [hostel, setHostel] = useState([]);
  const [nightToStay, setNightsToStay] = useState(0);
  console.log("hostelIn :", hostelIn);

  const handleNights = (e) => {
    setNightsToStay(e.currentTarget.value);
    console.log(nightToStay);
  };

  return (
    <Row>
      <Col>
        <h1>Choose days to stay</h1>
        <Form>
          {hostelIn.map((e) => (
            <div key={e.id}>
              <div>
                <span>
                  {e.name}
                  <Form.Group>
                    <Form.Control
                      type="number"
                      placeholder="Choose how many nights to stay"
                      onChange={handleNights}
                    ></Form.Control>
                  </Form.Group>
                </span>
              </div>
            </div>
          ))}
          <Button className="mt-3">Finalise</Button>
        </Form>
      </Col>
    </Row>
  );
}
