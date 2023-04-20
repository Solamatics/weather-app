import React from "react";
import "./smallCard.css";
import SunClouds from "../../../assets/sunclouds.png";
import { formatToLocalTime } from "../../../services/appServices";

const SmallCard = ({
  weathers,
  card,
  icon,
  time,
  dept,
  image,
  text,
  details,
  weather: {
    dt,
    timezone,
    name,
    country,
    description,
    humidity,
    sunrise,
    speed,
  },
}) => {
  return (
    <div style={{}}>
      <div className="smallcard">
        <div className="condition">
          {icon}
          <p>{weathers ? weathers : description}</p>
        </div>
        <div className="time-container">
          <div className="time">
            {weathers === "Humidity"
              ? `${humidity.toFixed()}%`
              : weathers === "Wind"
              ? `${speed.toFixed()}km/h`
              : formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </div>
          <div className="image-container">
            {image && <img src={image} alt="image" />}
          </div>

          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
