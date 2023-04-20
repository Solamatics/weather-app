import React from "react";
import "./bigCard.css";
import SunClouds from "../../../assets/sunclouds.png";
import { CiLocationOn } from "react-icons/ci";
import { iconUrl } from "../../../services/appServices";

const BigCard = ({ weather: { dt, timezone, name, country, icon, temp } }) => {
  return (
    <div className="bigcard">
      <div className="location">
        <CiLocationOn />
        <p>{`${name}, ${country}`}</p>
      </div>
      <div className="img-container">
        <img
          src={iconUrl(icon)}
          style={{ height: "100%", objectFit: "contain" }}
        />
      </div>

      <p className="degree">
        {`${temp.toFixed()}`}
        <span>&#176;</span>
      </p>
      <div className="bottom-text">
        <div>
          <img src={SunClouds} alt="sunclouds" />
        </div>
        <p> Partly cloudy</p>
      </div>
    </div>
  );
};

export default BigCard;
