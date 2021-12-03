import { Link, Outlet } from "react-router-dom";
import { getHostels } from "../../data";

export default function Hostels() {
  let hostels = getHostels();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {hostels.map((hostel) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/hostels/${hostel.id}`}
            key={hostel.id}
          >
            {hostel.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
