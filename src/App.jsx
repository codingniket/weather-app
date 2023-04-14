import { React, useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [location, setlocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3c20527ed51176d58124eed6bc08a06c&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      Axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setlocation("");
    }
  };
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setlocation(event.target.value)}
          onKeyPress={searchLocation}
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            <h1>{data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}</h1>
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="Feels">
            <p>{data.main ? data.main.feels_like : null}°C</p>
            <p className="size">Feels Like</p>
          </div>
          <div className="Humidity">
            <p>{data.main ? data.main.humidity : null}%</p>
            <p className="size">Humidity</p>
          </div>
          <div className="Wind">
            <p>{data.main ? data.wind.speed : null}</p>
            <p className="size">Wind (MPH)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
