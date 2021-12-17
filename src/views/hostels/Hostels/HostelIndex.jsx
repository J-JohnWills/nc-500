import React from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import HostelCard from "./HostelCard";
import { useSearchParams } from "react-router-dom";

export default function HostelIndex({ hostelsList }) {
  let [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <p>
        These are the hostels which you can visit on your trip around the
        fabulous NC 500
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 pb-3">
          <Form.Label>Search for a hostel</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter search term..."
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          ></Form.Control>
        </Form.Group>
      </Form>
      <Row xs={1} md={2} lg={3} className="g-4">
        {hostelsList
          .filter((hostelList) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let result =
              hostelList.description.toLowerCase() ||
              hostelList.name.toLowerCase();
            return result.includes(filter.toLowerCase());
          })

          .map((hostel) => (
            <HostelCard hostelIn={hostel} />
          ))}
      </Row>
    </div>
  );
}
