import React, {useEffect, useState} from "react";
import Card from "./card";
import "./style.css";
import "./responsive.css";

function Temp() {
  const [searchValue, setSearchValue] = useState("Delhi");
  const [tempInfo, setTempInfo] = useState("");


  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=e91b361c1aecdf54b20e00bc514ae0ab`;

      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myWeatherInfo);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="body">
        <div className="search">
          <input
            type="search"
            placeholder="Search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)} />
          <button className="searchButton" type="button" onClick={getWeatherInfo}>
            Search
          </button>
        </div>


        {/* card */}
        <Card {...tempInfo} />

      </div>
    </>
  );
}

export default Temp;
