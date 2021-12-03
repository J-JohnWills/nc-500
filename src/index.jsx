import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/app/App";
import Hostels from "./components/hostels/Hostels";
import Itineraries from "./components/itineraries/Itineraries";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="hostels" element={<Hostels />} />
        <Route path="itineraries" element={<Itineraries />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
