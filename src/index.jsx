import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/app/App";
import Hostels from "./components/hostels/Hostels";
import Hostel from "./components/hostel/Hostel";
import Itineraries from "./components/itineraries/Itineraries";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="hostels" element={<Hostels />}>
          <Route path=":hostelId" element={<Hostel />} />
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
