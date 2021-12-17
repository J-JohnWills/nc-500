import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function Hostels() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
