import { Link, Outlet, NavLink } from "react-router-dom";
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
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/hostels/${hostel.id}`}
            key={hostel.id}
          >
            {hostel.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
