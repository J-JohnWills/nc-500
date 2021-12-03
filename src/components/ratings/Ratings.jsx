import React from "react";

export default function Ratings({ ratingsIn }) {
  console.log(ratingsIn);
  return (
    <div>
      <p>This is the ratings component!</p>
      <ul>
        {ratingsIn.map((rating) => (
          <li>{rating}</li>
        ))}
      </ul>
    </div>
  );
}
