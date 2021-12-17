import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import StageView from "./StageView";

export default function ItineraryCard({ itinerary }) {
  let navigate = useNavigate();

  return (
    <Col>
      <Card border="primary">
        <Card.Header as="h5">{itinerary.user}</Card.Header>
        <Card.Body>
          <Card.Text>{itinerary.startdate}</Card.Text>
          {itinerary.stages.map((item) => (
            <StageView stages={item} />
          ))}
        </Card.Body>
        <Card.Footer>
          <Button
            onClick={() => {
              navigate("/hostels/");
            }}
          >
            Add/Edit stages
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
}
