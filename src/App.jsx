import React, { useCallback, useEffect, useReducer, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./bootstrap_flatly.css";
import Footer from "./components/Footer/Footer";
import NavNew from "./components/Nav/Nav";
import Container from "react-bootstrap/Container";

// itineraries views
import Itineraries from "./views/itineraries/itineraries/Itineraries";
import ItinerariesView from "./views/itineraries/itineraries-view/ItinerariesView";
import ItinerariesNew from "./views/itineraries/itineraries-new/ItinerariesNew";

// hostels views
import HostelIndex from "./views/hostels/Hostels/HostelIndex";
import Hostels from "./views/hostels/Hostels/Hostels";
import Hostel from "./views/hostels/Hostels-id/Hostel";
import Review from "./views/hostels/hostel-id-reviews/Review";

// home view
import Home from "./views/home/Home";
import DateChoose from "./views/itineraries/itineraries-new/DateChoose";
import AddStages from "./views/itineraries/itineraries-user-stages/AddStages";

// context

function reducer(state, item) {
  return [...state, item];
}

function Layout() {
  return (
    <Container className="py-3">
      <NavNew />
      <Outlet />
      <Footer />
    </Container>
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

  const [itinerary, setItinerary] = useReducer(reducer, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hostels" element={<Hostels />}>
            <Route index element={<HostelIndex hostelsList={hostelsList} />} />
            <Route path=":hostelId" element={<Hostel />} />
            <Route path=":hostelId/reviews" element={<Review />} />
          </Route>
          <Route
            path="itineraries"
            element={<Itineraries hostelList={hostelsList} />}
          >
            <Route
              path="view"
              element={<ItinerariesView hostelList={hostelsList} />}
            />
            <Route
              path="new"
              // element={<ItinerariesNew hostelList={hostelsList} />}
              element={<DateChoose />}
            >
              <Route path=":user" element={<AddStages />}></Route>
            </Route>
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
  );
}
