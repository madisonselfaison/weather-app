import React, { useState } from "react";
import WeatherResultsBadge from "./WeatherResultsBadge";


export default function CurrentWeather(){
   
  return (
    <>
      <h2 className="search--title">Weather Information</h2>
        <WeatherResultsBadge  />
    </>
  );
};
