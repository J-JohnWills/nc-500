import { Link, Outlet, NavLink, useSearchParams } from "react-router-dom";
import { getHostels } from "../../data";
import { Col, Container, Form, Nav, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState } from "react";

export default function Hostels() {
  // For use with hard coded datasource
  // let hostels = getHostels();

  let [searchParams, setSearchParams] = useSearchParams();
  const [hostelList, setHostelList] = useState([
    {
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
    },
  ]);

  // Fetch from CW data source
  useEffect(() => {
    const fetchHostels = async () => {
      const res = await fetch("http://localhost:8000/hostels");
      const data = await res.json();
      setHostelList(data);
      console.log(data);
    };
    fetchHostels();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Nav className="flex-sm-column">
            <Form>
              <Form.Group className="mb-3" controlId="searchHostel">
                <Form.Label>Search for a hostel</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter hostel name..."
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
            {hostelList
              .filter((hostelList) => {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let name = hostelList.name.toLowerCase();
                return name.startsWith(filter.toLowerCase());
              })
              .map((hostel) => (
                <LinkContainer to={`/hostels/${hostel.id}`} key={hostel.id}>
                  <Nav.Link>{hostel.name}</Nav.Link>
                </LinkContainer>
              ))}
          </Nav>
        </Col>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
