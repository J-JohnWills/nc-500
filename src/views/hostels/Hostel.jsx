import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import HostelReviewList from "./HostelReviewList";
import StarRatingComponent from "react-star-rating-component";
import Rating from "react-rating";

// Takes in an array of numbers and calculates the averages to 1 decimal point
function calcAverage(numbersIn) {
  let total = 0;
  let average = 0;

  if (numbersIn.length !== 0) {
    // some code
    for (let i = 0; i < numbersIn.length; i++) {
      total += numbersIn[i];
    }
    average = total / numbersIn.length;
    return average.toFixed(1);
  } else {
    return average;
  }
}

export default function Hostel() {
  let params = useParams();
  let hostelId = parseInt(params.hostelId, 10);
  let url = "http://localhost:3000/hostels/" + hostelId;

  const [hostelList, setHostelList] = useState({
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
  });

  const [average, setAverage] = useState(0);
  const [reviews, setReviews] = useState([]);

  const fetchData = useCallback(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const datalist = data[0];
        setHostelList(datalist);
        const average = calcAverage(datalist.ratings);
        setAverage(average);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h2>{hostelList.name}</h2>
      <p>{hostelList.description}</p>
      <h4>Where To Find Us</h4>
      <p>
        {hostelList.address}
        <br />
        {hostelList.postcode}
        <br />
        {hostelList.phone}
        <br />
        {hostelList.email}
      </p>
      <h4>Ratings</h4>
      <span>
        <Rating initialRating={average} fractions={2} readonly />
        <p>| from {hostelList.ratings.length} ratings.</p>
      </span>

      <p>
        This hostel has an average rating of {average} out of 5, from a total of{" "}
        {hostelList.ratings.length} reviews.
      </p>
      <HostelReviewList reviews={hostelList.reviews} />
    </div>
  );
}
