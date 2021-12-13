import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function HostelCard({ hostelIn }) {
  let navigate = useNavigate();
  const [hostel, setHostel] = useState({
    id: "",
    name: "",
    address: "",
    postcode: "",
    phone: "",
    email: "",
    description: "",
    location: { lat: 0, long: 0 },
    ratings: [],
    reviews: [
      {
        reviewer: "",
        review: "",
      },
    ],
  });

  useEffect(() => {
    setHostel(hostelIn);
  });

  return (
    <Col>
      <Card>
        <Card.Header as="h5">{hostel.name}</Card.Header>
        <Card.Body>
          <Card.Text>{hostel.description.slice(0, 200) + "..."}</Card.Text>
          <Button
            onClick={() => {
              navigate("/hostels/" + hostel.id);
            }}
          >
            See More...
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
