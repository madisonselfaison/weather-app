import React from "react";


export default function WeatherResultsBadge(props) {
  console.log(props, "props-current weather")
  const {currentWeather}=props
  return (
    <div className="current-results">
      <div className="results-top">
        <div>
          <p className="city">{currentWeather?.city}</p>
          <p className="weather-stats">{currentWeather?.weather[0]?.description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`/icons/${currentWeather.weather[0]?.icon}.png`} />
      </div>
      <div className="results-bottom">
        <p className="temp">{Math.round(currentWeather?.main.temp)}°F</p>
        <div className="details">
          <div className="param-row">
            <span className="param-label top">Details</span>
          </div>
          <div className="param-row">
            <span className="param-label">Feels Like</span>
            <span className="param-value">{Math.round(currentWeather?.main.feels_like)}°F</span>
          </div>
          <div className="param-row">
            <span className="param-label">Wind</span>
            <span className="param-value">{currentWeather?.wind.speed} mph</span>
          </div>
          <div className="param-row">
            <span className="param-label">Humidity</span>
            <span className="param-value">{currentWeather?.main.humidity}%</span>
          </div>
          <div className="param-row">
            <span className="param-label">Pressure</span>
            <span className="param-value">{currentWeather?.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
