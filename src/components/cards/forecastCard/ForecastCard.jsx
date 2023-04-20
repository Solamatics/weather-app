import React from "react";
import SunClouds from "../../../assets/sunclouds.png";
import { CiLocationOn } from "react-icons/ci";
import Sun from "../../../assets/smallsun.png";
import Bar from "../../../assets/bar.png";
import "./forecastCard.css";
import { iconUrl } from "../../../services/appServices";

const ForecastCard = ({ items, tempmin, tempmax }) => {
  console.log("ITEMS", tempmin);
  return (
    <div className="forecast-card">
      <div className="days">
        <p>5-day Forecast</p>
      </div>

      <hr />

      {items.map((item, index) => (
        <div className="forecast-detail" key={index}>
          <p>{item.title}</p>
          <div>
            <img
              style={{ height: "40px" }}
              src={iconUrl(item.icon)}
              alt="sun"
            />
          </div>
          <div className="divided">
            <span>
              {tempmin}
              <span>&#176;</span>
            </span>
            <span className="divider"></span>
            <span>
              {tempmax}
              <span>&#176;</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastCard;
