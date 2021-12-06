import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/app/App";
import Hostels from "./components/hostels/Hostels";
import Hostel from "./components/hostel/Hostel";
import Itineraries from "./components/itineraries/Itineraries";
import Review from "./components/review/Review";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* Hostels path, including the index and it's children */}
        <Route path="hostels" element={<Hostels testy={true} />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select a hostel</p>
              </main>
            }
          />
          <Route path=":hostelId" element={<Hostel />} />
          <Route path=":hostelId/reviews" element={<Review />} />
        </Route>
        <Route path="itineraries" element={<Itineraries />} />
      </Route>
      {/* The no match Route */}
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>Oops, looks like there is nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);
