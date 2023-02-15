import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import ForecastWeather from "./components/forecast-weather/ForecastWeather"
import PollutionWeather from "./components/pollution-weather/PollutionWeather";
import SearchPage from "./components/SearchPage"

export default function App() {


  return(
    <>
    <nav className="nav">
    <Link to="/SearchPage/weather" style ={{padding: 30}}>
      Current Weather
    </Link>
    <Link to="/SearchPage/forecast" style ={{padding: 30}}>
      Weather Forecast
    </Link>
    <Link to="/SearchPage/air_pollution" style={{padding: 30}}>
      Pollution
    </Link>
    </nav>
        <Routes>
          <Route path = "/SearchPage/:forecastType"  element = {<SearchPage />} />
        </Routes>
    </>
  )
}
//make one route and use parameter. these routes are rendering the component twice. Param is a variable
//need to create some kind of id and topicId. This way I can create a function to find or map through the id options and return the desired one.
//not sure if this function needs to live in the app component, or in other components... 