import React, { useReducer, useContext } from "react";
import { ItinerariesContext } from "./ItinerariesPlanner";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const reducer = (key) => key + 1;

export default function ItinerariesItem({ name, location }) {
  const { setItinerary } = useContext(ItinerariesContext);
  const [id, updateId] = useReducer(reducer, 0);

  function update() {
    setItinerary({
      name,
      id: `${name}-${id}`,
      location,
    });
    updateId();
  }
  return (
    <div
      style={{
        border: "blue solid 1px",
        margin: 20,
        padding: 25,
        position: "relative",
        textAlign: "center",
        textTransform: "capitalize",
        backgroundColor: "#eeeeff",
        width: 150,
      }}
    >
      <p style={{ cursor: "pointer" }} onClick={update}>
        {/* <CheckCircleIcon /> */}
        {name}
      </p>
    </div>
  );
}
