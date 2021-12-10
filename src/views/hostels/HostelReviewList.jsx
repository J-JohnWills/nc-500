import React from "react";
import HostelReview from "./HostelReview";

export default function HostelReviewList({ reviews }) {
  const reviewsList = reviews;
  console.log(reviewsList);
  return (
    <div>
      <h2>Hostel Reviews</h2>
      {reviewsList.map((review) => {
        return <HostelReview reviewIn={review} />;
      })}
    </div>
  );
}
