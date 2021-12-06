import { useParams } from "react-router-dom";
import { getHostel } from "../../data";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
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

  function averageRating(ratingsIn) {
    let total = 0;
    let average = 0;

    for (let i = 0; i < ratingsIn.length; i++) {
      total += ratingsIn[i];
    }
    average = total / ratingsIn.length;
    console.log(average.toFixed(1));
    return average.toFixed(1);
  }

  return (
    <main>
      <h2>{hostel.name}</h2>
      <p>{hostel.description}</p>
      <h4>Where To Find Us</h4>
      <p>{hostel.address}</p>
      <p>{hostel.postcode}</p>
      <p>{hostel.phone}</p>
      <p>{hostel.email}</p>
      <h4>Ratings</h4>
      <p>
        This hostel has an average rating of {averageRating(hostel.ratings)} out
        of 5, from a total of {hostel.ratings.length} reviews.
      </p>
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
        <LinkContainer
          to={`/hostels/${hostel.id}/reviews`}
          key={params.hostelId}
        >
          <Button className="my-3">Leave a review</Button>
        </LinkContainer>
      </div>

      {/* <CryptoChart chartData={chartData} /> */}
    </main>
  );
}
