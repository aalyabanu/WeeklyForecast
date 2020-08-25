import React from "react";
import Table from "react-bootstrap/Table";

const WeatherData = (props) => {
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th colSpan="2">
              <sup>o</sup>C
            </th>
            <th>W</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {props.max}</td>
            <td> {props.min}</td>
            <td>{props.wind}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default WeatherData;
