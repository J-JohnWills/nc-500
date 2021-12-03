import { Link, Outlet, NavLink, useSearchParams } from "react-router-dom";
import { getHostels } from "../../data";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Hostels() {
  let hostels = getHostels();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <Nav className="flex-column">
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
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
      <Outlet />
    </div>
  );
}
