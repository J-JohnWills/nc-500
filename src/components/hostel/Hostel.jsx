import { useParams } from "react-router-dom";
import { getHostel } from "../../data";

export default function Hostel() {
  let params = useParams();
  let hostel = getHostel(params.hostelId);

  return (
    <main>
      <h2>{hostel.name}</h2>
      <p>{hostel.description}</p>
      <p></p>
    </main>
  );
}
