import React from "react";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import nc500 from "../../../assets/images/nc500Scenic.jpg";

export default function HomePage() {
  return (
    <div>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold">
          Organise your trip with the NC 500 Planner
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Manage your trip around the beautiful north coast route of Scotland.
            Choose your hostels and how long you'll be staying.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <LinkContainer to="/itineraries">
              <Button
                className="btn-lg px-4 me-sm-3"
                variant="outline-secondary"
              >
                Get Started
              </Button>
            </LinkContainer>
          </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
          <div className="container px-5">
            <img
              src={nc500}
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example image"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
