import React from "react";
import WeatherData from "./WeatherData";
import Description from "./Description";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card-style.css";

const Scard = (props) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = new Date(parseInt(props.dateString) * 1000);
  const nameDay = days[day.getDay(day)];
  const month = months[day.getMonth(day)];
  const date = day.getDate(day);
  const image = `http://openweathermap.org/img/wn/${props.img}@2x.png`;
  const maxTemp = Math.round(props.max, 1);
  const minTemp = Math.round(props.min, 1);
  const windSpeed = Math.round(props.wind, 1);
  const dataKey = props.dateString + "data";
  return (
    <div className="card text-center" >
      <div className="card-body text-dark">
        <h4 className="card-title" style={{ marginTop: "30px" }}> {nameDay}</h4>
        <p className="card-text text-secondary">
          {date}, {month}
        </p>
      </div>
      <div className="overflow">
        <img top width="40%" src={image} alt={props.alt} />
      </div>

      <div className="description">
        <Description text={props.text} />
      </div>
      <div className="temp">
        <WeatherData
          key={dataKey}
          max={maxTemp}
          min={minTemp}
          wind={windSpeed}
        />
      </div>
    </div>
  );
};

export default Scard;
