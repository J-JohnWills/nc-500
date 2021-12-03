import { useParams } from "react-router-dom";
import { getHostel } from "../../data";
import Ratings from "../ratings/Ratings";

export default function Hostel() {
  let params = useParams();
  let hostel = getHostel(params.hostelId);

  return (
    <main>
      <h2>{hostel.name}</h2>
      <p>{hostel.description}</p>
      <Ratings ratingsIn={hostel.ratings} />
    </main>
  );
}
