import { Link, Outlet, NavLink, useSearchParams } from "react-router-dom";
import { getHostels } from "../../data";
import { Col, Container, Form, Nav, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Hostels() {
  let hostels = getHostels();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <Container>
      <Row>
        <Col xs={3}>
          <Nav className="flex-column">
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
            {hostels
              .filter((hostel) => {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let name = hostel.name.toLowerCase();
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
