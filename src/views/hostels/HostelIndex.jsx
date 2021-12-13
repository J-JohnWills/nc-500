import React from "react";
import Row from "react-bootstrap/Row";
import HostelCard from "./HostelCard";

export default function HostelIndex({ hostelsList }) {
  return (
    <div>
      <p>
        These are the hostels which you can visit on your trip around the
        fabulous NC 500
      </p>
      <Row xs={1} md={2} lg={3} className="g-4">
        {hostelsList.map((hostel) => (
          <HostelCard hostelIn={hostel} />
        ))}
      </Row>
    </div>
  );
}
