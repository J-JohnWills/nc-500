import React from "react";
import Container from "react-bootstrap/Container";
import NavNew from "../../components/Nav/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export default function Layout() {
  return function Layout() {
    return (
      <Container className="py-3">
        <NavNew />
        <Outlet />
        <Footer />
      </Container>
    );
  };
}
