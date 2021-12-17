import React from "react";

export default function StageView({ stages }) {
  return (
    <div>
      <h6>Stages</h6>
      <p>Stage: {stages.stage}</p>
      <p>Hostel: {stages.hostel}</p>
      <p>Nights: {stages.nights}</p>
    </div>
  );
}
