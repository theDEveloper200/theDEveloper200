import React, { useEffect } from "react";

const Card = ({
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
}) => {
  const [weatherState, setWeatherState] = React.useState("");

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  //change sec into minute
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <section className="box">
        <div className="cam"></div>
        <div className="bat"></div>
        <div className="icon">
          <div className="weatherInfo">
            <div className="temperature">
              <span>{temp}&deg;C</span>
            </div>
            <div className="description">
              <div className="weatherCondition">{weathermood}</div>
              <div className="place">
                {name}, {country}
              </div>
            </div>
            <div className="date">{new Date().toLocaleString()}</div>
          </div>
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided">
              <p>
                <i className={"wi wi-sunrise"}></i>
              </p>
              <p className="extra-leftside-info">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>
            <div className="two-sided">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-leftside-info">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="another-extra-info">
            <div className="two-sided">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-leftside-info">
                {pressure} <br />
                pressure
              </p>
            </div>
            <div className="two-sided">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-leftside-info">
                {speed} <br />
                speed
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
