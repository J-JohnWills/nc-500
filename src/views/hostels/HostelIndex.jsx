import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HostelCard from "./HostelCard";

export default function HostelIndex({ hostelsList }) {
  console.log(hostelsList);
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {hostelsList.map((hostel) => (
        <HostelCard hostelIn={hostel} />
      ))}
    </Row>
  );
}
