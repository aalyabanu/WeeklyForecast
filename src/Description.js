import React from "react";
import Card from "react-bootstrap/Card";

const Description = (props) => {
  return (
    <div>
      <Card className="mx-auto text-center mt-2 border-0">
        <Card.Body>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Description;
