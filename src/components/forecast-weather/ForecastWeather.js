import React, { useState } from "react";

//set up an array of days for each date and map through array instead hard coding 5 times. 
const ForecastWeather = (props) => {

  console.log(props, "props-forecast");
  const { forecast } = props;

  return (
    <>
      <label className="forecast-title">Five Day Forecast</label>
      <div className="day-1">
        <div>Date: {forecast?.list[6].dt_txt}</div>
        <div className="current-results">
          <div className="results-top">
            <div>
              <p className="city">{forecast?.city.name}</p>
              <p className="weather-stats">
                {forecast?.list[6].weather[0].description}
              </p>
            </div>
            <img
              alt="weather"
              className="weather-icon"
              src={`/icons/${forecast?.list[6]?.weather[0]?.icon}.png`}
            />
          </div>
          <div className="results-bottom">
            <p className="temp">{Math.round(forecast?.list[6].main.temp)}°F</p>
            <div className="details">
              <div className="param-row">
                <span className="param-label top">Details</span>
              </div>
              <div className="param-row">
                <span className="param-label">Feels Like</span>
                <span className="param-value">
                  {Math.round(forecast?.list[6].main.feels_like)}°F
                </span>
              </div>
              <div className="param-row">
                <span className="param-label">Wind</span>
                <span className="param-value">
                  {forecast?.list[6].wind.speed} mph
                </span>
              </div>
              <div className="param-row">
                <span className="param-label">Humidity</span>
                <span className="param-value">
                  {forecast?.list[6].main.humidity}%
                </span>
              </div>
              <div className="param-row">
                <span className="param-label">Pressure</span>
                <span className="param-value">
                  {forecast?.list[6].main.pressure} hPa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="day-2">
        <div>Date: {forecast?.list[14].dt_txt}</div>
        <div className="current-results">
          <div className="results-top">
            <div>
              <p className="city">{forecast?.city.name}</p>
              <p className="weather-stats">
                {forecast?.list[14].weather[0].description}
              </p>
            </div>
            <img
              alt="weather"
              className="weather-icon"
              src={`/icons/${forecast?.list[14]?.weather[0]?.icon}.png`}
            />
          </div>
          <div className="results-bottom">
            <p className="temp">{Math.round(forecast?.list[14].main.temp)}°F</p>
            <div className="details">
              <div className="param-row">
                <span className="param-label top">Details</span>
              </div>
              <div className="param-row">
                <span className="param-label">Feels Like</span>
                <span className="param-value">
                  {Math.round(forecast?.list[14].main.feels_like)}°F
                </span>
              </div>
              <div className="param-row">
                <span className="param-label">Wind</span>
                <span className="param-value">
                  {forecast?.list[14].wind.speed} mph
                </span>
              </div>
              <div className="param-row">
                <span className="param-label">Humidity</span>
                <span className="param-value">
                  {forecast?.list[14].main.humidity}%
                </span>
              </div>
              <div className="param-row">
                <span className="param-label">Pressure</span>
                <span className="param-value">
                  {forecast?.list[14].main.pressure} hPa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="day-3">
        <div>Date: {forecast?.list[22].dt_txt}</div>
        <div className="current-results">
          <div className="results-top">
            <div>
              <p className="city">{forecast?.city.name}</p>
              <p className="weather-stats">
                {forecast?.list[22].weather[0].description}
              </p>
            </div>
            <img
              alt="weather"
              className="weather-icon"
              src={`/icons/${forecast?.list[22]?.weather[0]?.icon}.png`}
            />
          </div>
          <div className="results-bottom">
            <p className="temp">{Math.round(forecast?.list[22].main.temp)}°F</p>
            <div className="details">
              <div className="param-row">
                <span className="param-label top">Details</span>
              </div>
              <div className="param-row">
                <span className="param-label">Feels Like</span>
                <span className="param-value">
                  {Math.round(forecast?.list[22].main.feels_like)}°F
                </span>
              </div>
              <div className="param-row">
                <span className="param-label">Wind</span>
                <span className="param-value">
                  {forecast?.list[22].wind.speed} mph
                </span>
              </div>
              <div className="param-row">
                <span className="param-label">Humidity</span>
                <span className="param-value">
                  {forecast?.list[22].main.humidity}%
                </span>
              </div>
              <div className="param-row">
                <span className="param-label">Pressure</span>
                <span className="param-value">
                  {forecast?.list[22].main.pressure} hPa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="day-4">
        <div>Date: {forecast?.list[30].dt_txt}</div>
        <div className="current-results">
          <div className="results-top">
            <div>
              <p className="city">{forecast?.city.name}</p>
              <p className="weather-stats">
                {forecast?.list[30].weather[0].description}
              </p>
            </div>
            <img
              alt="weather"
              className="weather-icon"
              src={`/icons/${forecast?.list[30]?.weather[0]?.icon}.png`}
            />
          </div>
          <div className="results-bottom">
            <p className="temp">{Math.round(forecast?.list[30].main.temp)}°F</p>
            <div className="details">
              <div className="param-row">
                <span className="param-label top">Details</span>
              </div>
              <div className="param-row">
                <span className="param-label">Feels Like</span>
                <span className="param-value">
                  {Math.round(forecast?.list[30].main.feels_like)}°F
                </span>
              </div>
              <div className="param-row">
                <span className="param-label">Wind</span>
                <span className="param-value">
                  {forecast?.list[30].wind.speed} mph
                </span>
              </div>
              <div className="param-row">
                <span className="param-label">Humidity</span>
                <span className="param-value">
                  {forecast?.list[30].main.humidity}%
                </span>
              </div>
              <div className="param-row">
                <span className="param-label">Pressure</span>
                <span className="param-value">
                  {forecast?.list[30].main.pressure} hPa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="day-5">
        <div>Date: {forecast?.list[38].dt_txt}</div>
        <div className="current-results">
          <div className="results-top">
            <div>
              <p className="city">{forecast?.city.name}</p>
              <p className="weather-stats">
                {forecast?.list[38].weather[0].description}
              </p>
            </div>
            <img
              alt="weather"
              className="weather-icon"
              src={`/icons/${forecast?.list[38]?.weather[0]?.icon}.png`}
            />
          </div>
          <div className="results-bottom">
            <p className="temp">{Math.round(forecast?.list[38].main.temp)}°F</p>
            <div className="details">
              <div className="param-row">
                <span className="param-label top">Details</span>
              </div>
              <div className="param-row">
                <span className="param-label">Feels Like</span>
                <span className="param-value">
                  {Math.round(forecast?.list[38].main.feels_like)}°F
                </span>
              </div>
              <div className="param-row">
                <span className="param-label">Wind</span>
                <span className="param-value">
                  {forecast?.list[38].wind.speed} mph
                </span>
              </div>
              <div className="param-row">
                <span className="param-label">Humidity</span>
                <span className="param-value">
                  {forecast?.list[38].main.humidity}%
                </span>
              </div>
              <div className="param-row">
                <span className="param-label">Pressure</span>
                <span className="param-value">
                  {forecast?.list[38].main.pressure} hPa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForecastWeather;
