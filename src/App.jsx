import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Invoices from "./views/invoices/Invoices";
import Invoice from "./views/invoices/Invoice";
import Hostels from "./views/hostels/Hostels";
import Hostel from "./views/hostels/Hostel";
import Review from "./views/review/Review";
import "./bootstrap_flatly.css";
import Itineraries from "./views/itineraries/Itineraries";
import MUISandbox from "./views/muiSandbox/MUISandbox";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> | <Link to="/mui">Mui</Link> |{" "}
        <Link to="/hostels">Hostels</Link> |{" "}
        <Link to="/itineraries">Itineraries</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="mui" element={<MUISandbox />} />
            <Route path="invoices" element={<Invoices />}>
              <Route
                index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Select an invoice</p>
                  </main>
                }
              />
              <Route path=":invoiceId" element={<Invoice />} />
            </Route>
            <Route path="hostels" element={<Hostels />}>
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
