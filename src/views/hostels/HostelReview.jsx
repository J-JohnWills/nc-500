import React from "react";

export default function HostelReview({ reviewIn }) {
  return (
    <div>
      <p>
        {reviewIn.review}
        <br />
        {reviewIn.reviewer}
      </p>
    </div>
  );
}
