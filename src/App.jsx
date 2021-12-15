import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Hostels from "./views/hostels/Hostels";
import Hostel from "./views/hostels/Hostel";
import Review from "./views/review/Review";
import "./bootstrap_flatly.css";
import NavbarTop from "./components/NavbarTop";
import HostelIndex from "./views/hostels/HostelIndex";
import Footer from "./components/Footer/Footer";

function Home() {
  return (
    <div>
      <NavbarTop />
      <Outlet />
      <Footer />
    </div>
  );
}

export default function App() {
  const [hostelsList, setHostelsList] = useState([]);

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

  function testy() {}

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="hostels" element={<Hostels />}>
              <Route
                index
                element={<HostelIndex hostelsList={hostelsList} />}
              />
              <Route path=":hostelId" element={<Hostel />} />
              <Route path=":hostelId/reviews" element={<Review />} />
            </Route>
          </Route>
          {/* The no match route - 404  */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Oops, looks like something went wrong</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
