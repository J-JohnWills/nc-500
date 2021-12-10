import React from "react";
import HostelReview from "./HostelReview";
import { useNavigate, useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export default function HostelReviewList({ reviews }) {
  const reviewsList = reviews;
  let navigate = useNavigate();
  let params = useParams();
  const hostelId = params;
  console.log("hostelId: ", hostelId);

  return (
    <div>
      <h2>Hostel Reviews</h2>
      {reviewsList.map((review) => {
        return <HostelReview reviewIn={review} />;
      })}
      <LinkContainer
        to={`/hostels/${hostelId.hostelId}/reviews`}
        key={hostelId.hostelId}
      >
        <button>Leave A Review</button>
      </LinkContainer>
    </div>
  );
}
