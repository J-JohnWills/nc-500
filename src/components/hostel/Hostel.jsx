import { useParams } from "react-router-dom";
import { getHostel } from "../../data";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

import CryptoChart from "../CryptoChart";

export default function Hostel() {
  let params = useParams();
  let hostel = getHostel(params.hostelId);

  // TODO: Turn into beautiful ravioli
  // FIXME: Fix this spaghetti
  // Adds the ratings to a 2d array where the index number of each array corresponds to
  // the rating - 1

  // var arrayOfRatingsArrays = [[], [], [], [], []];
  // var arrayIndex = 0;
  // for (let i = 0; i < hostel.ratings.length; i++) {
  //   arrayIndex = hostel.ratings[i] - 1;
  //   arrayOfRatingsArrays[arrayIndex].push(hostel.ratings[i]);
  // }
  // console.log(arrayOfRatingsArrays);
  // console.log(hostel.ratings);
  // for (let i = 0; i < arrayOfRatingsArrays.length; i++) {
  //   console.log(arrayOfRatingsArrays[i]);
  // }

  // Chart with api tut section
  // useEffect(() => {
  //   const fetchPrices = async () => {
  //     const res = await fetch("https://api.coincap.io/v2/assets/?limit=5");
  //     const data = await res.json();
  //     setChartData({
  //       labels: data.data.map((crypto) => crypto.name),
  //       datasets: [
  //         {
  //           label: "Price in USD",
  //           data: data.data.map((crypto) => crypto.priceUsd),
  //           backgroundColor: [
  //             "#ffbb11",
  //             "#ecf0f1",
  //             "#50AF95",
  //             "#f3ba2f",
  //             "#2a71d0",
  //           ],
  //         },
  //       ],
  //     });
  //     console.log(data);
  //   };
  //   fetchPrices();
  // }, []);

  // const [chartData, setChartData] = useState({});

  return (
    <main>
      <h2>{hostel.name}</h2>
      <p>{hostel.description}</p>
      <p>{hostel.address}</p>
      <p>{hostel.postcode}</p>
      <p>{hostel.phone}</p>
      <p>{hostel.email}</p>
      <p>
        {hostel.reviews.map((review) => (
          <li>
            {review.review} | <em>{review.reviewer}</em>
          </li>
        ))}
      </p>
      <ul>
        {hostel.ratings.map((rating) => (
          <li style={{ float: "left", listStyle: "none" }}>{rating} </li>
        ))}
      </ul>
      <br />
      <div>
        <h3>Reviews</h3>
        {hostel.reviews.map((review) => (
          <Card>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p> {review.review}</p>
              </blockquote>
            </Card.Body>
            <Card.Footer className="text-muted">{review.reviewer}</Card.Footer>
          </Card>
        ))}
        <Button className="my-3">Leave a review</Button>
      </div>

      {/* <CryptoChart chartData={chartData} /> */}
    </main>
  );
}
