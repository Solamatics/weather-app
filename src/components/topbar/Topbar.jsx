import React, { useState } from "react";
import "./topbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const Topbar = ({ units, setUnits, setQuery }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handleUnitChange = (e) => {
    e.preventDefault();

    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div>
      <div className="topbar">
        <div>
          <button name="metric" onClick={handleUnitChange}>
            Celcius
          </button>
          <button name="imperial" onClick={handleUnitChange}>
            Fahrenheit
          </button>
        </div>

        <div className="search" onClick={handleSearch}>
          <AiOutlineSearch />
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginTop: "2rem" }}>
        <CiLocationOn size={"2em"} onClick={handleLocationClick} />{" "}
        <span>Turn on Locations</span>
      </div>
    </div>
  );
};

export default Topbar;
