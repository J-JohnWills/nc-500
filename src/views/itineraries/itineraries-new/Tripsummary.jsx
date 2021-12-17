import React from "react";

export default function Tripsummary({ hostel }) {
  return (
    <div key={hostel.id}>
      {hostel.map((e) => (
        <div>
          <p>{e.name}</p>
        </div>
      ))}
    </div>
  );
}
