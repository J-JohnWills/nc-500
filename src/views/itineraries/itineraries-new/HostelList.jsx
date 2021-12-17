import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default function HostelList({ hostel, add, remove }) {
  const [userInput, setUserInput] = useState();

  return (
    <ListGroup>
      {hostel.map((item) => (
        <div>
          <ListGroup.Item>
            {item.name}
            <Button variant="outline-success" onClick={() => add(item)}>
              Add
            </Button>
            <Button variant="outline-danger" onClick={() => remove(item)}>
              Remove
            </Button>
          </ListGroup.Item>
        </div>
      ))}
    </ListGroup>
  );
}
