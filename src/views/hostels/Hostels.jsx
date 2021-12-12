import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import HostelCard from "./HostelCard";

export default function Hostels() {
  const [hostelsList, setHostelsList] = useState([
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

  useEffect(() => {
    async function getHostelsList() {
      const res = await fetch("http://localhost:3000/hostels");
      const data = await res.json();
      setHostelsList(data);
      console.log(hostelsList);
    }
    getHostelsList();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {hostelsList.map((hostel) => (
          <NavLink
            style={({ isActive }) => ({
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            })}
            to={`/hostels/${hostel.id}`}
            key={hostel.id}
          >
            {hostel.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
      <HostelCard />
    </div>
  );
}
