import React from "react";
import "./forecast.css";
import Cloud from "../../assets/cloud.png";
import { iconUrl } from "../../services/appServices";

const Forecast = ({ items }) => {
  console.log(items);
  return (
    <div className="forecast">
      <div className="subHeader">
        <p>Condition throughout today</p>
      </div>

      <hr />

      <div className="timing-container">
        {items.map((item, index) => (
          <div className="timing" key={index}>
            <p>Now</p>
            <img
              src={iconUrl(item.icon)}
              alt="cloud"
              style={{ height: "30px" }}
            />
            <p>
              {item.temp.toFixed()}
              <span>&#176;</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
