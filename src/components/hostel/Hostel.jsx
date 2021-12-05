import { useParams } from "react-router-dom";
import { getHostel } from "../../data";

export default function Hostel() {
  let params = useParams();
  let hostel = getHostel(params.hostelId);

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
    </main>
  );
}
