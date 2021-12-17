import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function HostelList({ hostel, add, remove }) {
  const [userInput, setUserInput] = useState();

  return (
    <ListGroup>
      {hostel.map((item) => (
        <div key={item.id}>
          <ListGroup.Item action onClick={() => add(item)}>
            {item.name}
          </ListGroup.Item>
        </div>
      ))}
    </ListGroup>
  );
}
