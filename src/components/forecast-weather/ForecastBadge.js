import React from "react"
import SearchPage from "../SearchPage"

export default function ForecastBadge(props) {
    console.log(props, "props forecast badge component")
    const {forecast}=props
  
  return (
    <div className="current-results">
      <div className="results-top">
        <div>
          <p className="city">{forecast.city.name}</p>
          <p className="weather-stats">Details</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/01d.png`} />
      </div>
      <div className="results-bottom">
        <p className="temp">25°F</p>
        <div className="details">
          <div className="param-row">
            <span className="param-label top">Details</span>
          </div>
          <div className="param-row">
            <span className="param-label">Feels Like</span>
            <span className="param-value">20°F</span>
          </div>
          <div className="param-row">
            <span className="param-label">Wind</span>
            <span className="param-value">2 mph</span>
          </div>
          <div className="param-row">
            <span className="param-label">Humidity</span>
            <span className="param-value">16%</span>
          </div>
          <div className="param-row">
            <span className="param-label">Pressure</span>
            <span className="param-value">150 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
    