import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function Hostels() {
  // const [hostelsList, setHostelsList] = useState([
  //   {
  //     id: "",
  //     name: "",
  //     address: "",
  //     postcode: "",
  //     phone: "",
  //     email: "",
  //     description: "",
  //     location: { lat: 0, long: 0 },
  //     ratings: [],
  //     reviews: [
  //       {
  //         reviewer: "",
  //         review: "",
  //       },
  //     ],
  //   },
  // ]);

  // useEffect(() => {
  //   async function getHostelsList() {
  //     const res = await fetch("http://localhost:3000/hostels");
  //     const data = await res.json();
  //     setHostelsList(data);
  //   }
  //   getHostelsList();
  // }, []);

  return (
    <Container>
      <Outlet />
    </Container>
  );
}
