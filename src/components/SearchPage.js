import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import {
  WEATHER_API_KEY,
  WEATHER_API_URL,
  GEO_API_URL,
  geoApiOptions,
} from "../api";
import WeatherResultsBadge from "./current-weather/WeatherResultsBadge";
import PollutionWeather from "./pollution-weather/PollutionWeather";
import ForecastWeather from "./forecast-weather/ForecastWeather";
import {useParams} from "react-router-dom"

export default function SearchPage() {
  const [search, setSearch] = useState(null);
  const [weather, setWeather] = useState(null);


  // const WeatherResultsBadge = () => {
     const routeParams = useParams().forecastType
     console.log(routeParams)
  // };

  // const ForecastWeather = () => {
  //   const routeParams = useParams()
  // }
 
  // const PollutionWeather = () => {
  //   const routeParams = useParams()
  // };

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const weatherFetch = fetch(
      `${WEATHER_API_URL}/${routeParams}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );
    // const forecastFetch = fetch(
    //   `${WEATHER_API_URL}/${routeParams}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    // );
    // const pollutionFetch = fetch(
    //   `${WEATHER_API_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    // );
   

   weatherFetch
      .then(async (response) => {
        const weatherResponse = await response.json();
     

        setWeather({ city: searchData.label, ...weatherResponse });
        // setForecast({ city: searchData.label, ...forecastResponse });
        // setPollution({ city: searchData.label, ...pollutionResponse });

      })
      .catch((err) => console.log(err));
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
    // .catch(err => console.error(err));
  };
  

  return (
    <>
      <h2 className="search--title">Weather Information</h2>
      <AsyncPaginate
        placeholder="Enter City Here"
        debounceTimeout={600}
        value={search}
        onChange={handleOnSearchChange}
        loadOptions={loadOptions}
      />
      
    {weather && routeParams==="weather" && <WeatherResultsBadge currentWeather={weather}/>} 
    {weather && routeParams==="forecast" && <ForecastWeather forecast={weather} />}
    {weather && routeParams==="air_pollution" && <PollutionWeather pollution={weather}/>}
       
    </>
  );
  }
// make state that says isLoading and every time you change the page, you set isLoading to "true" in the .then of fetch, set it to "false"
//rely on useEffect??
//pass a funciton from search to each component (isLoading) through props. Then have the components be the ones that use function to set isLoading to "false" in the useEffect
// setIsLoading belongs to search page and then is sent down as props. 