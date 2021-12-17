import React from "react";
import ItinerariesItem from "./ItinerariesItem";

const hostels = [
  {
    id: 1,
    name: "Torridon Youth Hostel",
    location: { lat: 57.543799, long: -5.504566 },
  },
  {
    id: 2,
    name: "Inverness Youth Hostel",
    location: { lat: 57.480662, long: -4.211335 },
  },
  {
    id: 3,
    name: "Gairloch Sands Youth Hostel",
    location: { lat: 57.732262, long: -5.759794 },
  },
  {
    id: 4,
    name: "Tongue Hostel",
    location: { lat: 58.492768, long: -4.42843 },
  },
  {
    id: 5,
    name: "Ullapool Youth Hostel",
    location: { lat: 57.896333, long: -5.156314 },
  },
  {
    id: 6,
    name: "Surness Smoo Hostel",
    location: { lat: 58.563542, long: -4.723322 },
  },
  {
    id: 7,
    name: "Helmsdale Hostel",
    location: { lat: 58.117588, long: -3.648901 },
  },
  {
    id: 8,
    name: "Applecross, Hartfield House",
    location: { lat: 57.452662, long: -5.802272 },
  },
  {
    id: 9,
    name: "Achmelvich Beach Youth Hostel",
    location: { lat: 58.168936, long: -5.304672 },
  },
  {
    id: 10,
    name: "Portsoy",
    location: { lat: 57.682264, long: -2.683269 },
  },
  {
    id: 11,
    name: "Drumnadrochit",
    location: { lat: 57.329341, long: -4.471393 },
  },
  {
    id: 12,
    name: "Glen Affric Youth Hostel",
    location: { lat: 57.23236, long: -5.1831 },
  },
  {
    id: 13,
    name: "Ratagan Youth Hostel",
    location: { lat: 57.222139, long: -5.447147 },
  },
  {
    id: 14,
    name: "Portree Youth Hostel",
    location: { lat: 57.4122671, long: -6.1960968 },
  },
  {
    id: 15,
    name: "Fort Augustus",
    location: { lat: 57.148251, long: -4.682 },
  },
];

export default function ItinerariesBuilder() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: [10, 50],
        justifyContent: "center",
        border: "black solid 1px",
      }}
    >
      <p>Itineraries Builder</p>
      {hostels.map((hostel) => (
        <ItinerariesItem
          name={hostel.name}
          key={hostel.id}
          location={hostel.location}
        />
      ))}
    </div>
  );
}
