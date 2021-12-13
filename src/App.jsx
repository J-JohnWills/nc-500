import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Invoices from "./views/invoices/Invoices";
import Invoice from "./views/invoices/Invoice";
import Hostels from "./views/hostels/Hostels";
import Hostel from "./views/hostels/Hostel";
import Review from "./views/review/Review";
import "./bootstrap_flatly.css";
import Itineraries from "./views/itineraries/Itineraries";
import MUISandbox from "./views/muiSandbox/MUISandbox";
import NavbarTop from "./components/NavbarTop";
import HostelIndex from "./views/hostels/HostelIndex";

function Home() {
  return (
    <div>
      <NavbarTop />
      <Outlet />
    </div>
  );
}

export default function App() {
  const [hostelsList, setHostelsList] = useState([
    // {
    //   id: "",
    //   name: "",
    //   address: "",
    //   postcode: "",
    //   phone: "",
    //   email: "",
    //   description: "",
    //   location: { lat: 0, long: 0 },
    //   ratings: [],
    //   reviews: [
    //     {
    //       reviewer: "",
    //       review: "",
    //     },
    //   ],
    // },
  ]);

  const fetchHostels = useCallback(() => {
    fetch("http://localhost:3000/hostels")
      .then((res) => res.json())
      .then((data) => {
        const dataList = data;
        setHostelsList(dataList);
        console.log("App.js hostelList: ", hostelsList);
        console.log("datalist", dataList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchHostels();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="mui" element={<MUISandbox />} />
            <Route path="hostels" element={<Hostels />}>
              <Route
                index
                element={<HostelIndex hostelsList={hostelsList} />}
              />
              <Route path=":hostelId" element={<Hostel />} />
              <Route path=":hostelId/reviews" element={<Review />} />
            </Route>
            <Route path="itineraries" element={<Itineraries />}></Route>
          </Route>
          {/* The no match route - 404  */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
