import React, { useState, useEffect } from "react";
import "./App.css";
import TopBar from "./components/topbar/Topbar";
import BigCard from "./components/cards/bigCard/BigCard";
import SmallCard from "./components/cards/smallcard/SmallCard";
import ForecastCard from "./components/cards/forecastCard/ForecastCard";
import Rainbow from "././assets/rainbow.svg";
import { BsCloudSun } from "react-icons/bs";
import { WiRaindrop } from "react-icons/wi";
import { BsWater } from "react-icons/bs";
import { BiWind } from "react-icons/bi";
import Forecast from "./components/forecast/Forecast";
import getFormattedWeatherData from "./services/appServices";
import { Dots } from "loading-animations-react";

function App() {
  const [query, setQuery] = useState({ q: "abuja" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async () => {
    setLoading(true);
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      console.log("DATA", data);
      setWeather(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchWeatherData();
  }, [query, units]);
  return (
    <div className="app">
      <TopBar setQuery={setQuery} units={units} setUnits={setUnits} />

      {loading ? (
        <Dots
          text="Loading..."
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ) : null}

      {weather && (
        <div>
          <div className="app-detail">
            <BigCard weather={weather} />

            <SmallCard
              card="first"
              icon={<BsCloudSun />}
              time="5:50 AM"
              image={Rainbow}
              text="The dew point is 6o right now."
              weather={weather}
            />

            <SmallCard
              card="second"
              icon={<WiRaindrop />}
              time="0 mm"
              text="Next expected is1.2mm  on Fri."
              weathers="Rainfall"
              weather={weather}
            />
          </div>
          <Forecast items={weather.hourly} />

          <div className="app-detail">
            <ForecastCard
              items={weather.daily}
              tempmin={weather.temp_min}
              tempmax={weather.temp_max}
            />
            <SmallCard
              card="third"
              icon={<BsWater />}
              time="65%"
              text="Next expected is1.2mm  on Fri."
              weathers="Humidity"
              weather={weather}
            />

            <SmallCard
              icon={<WiRaindrop />}
              time="7.90"
              text="Time now: 12:00 PM"
              weathers="Wind"
              weather={weather}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
