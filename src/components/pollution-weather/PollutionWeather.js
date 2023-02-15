import React from "react"

export default function PollutionWeather(props) {
    console.log(props, "props-pollution weather")
    const {pollution} =props

    //need to include considitonal rendering here. Example: if pollution is x number, thenn return Good/bad with good/bad icon. 
    // the good/bad statement and icon will be rendered below into the code. 

    return (
        <>
        <h1>Pollution weather component </h1>
        <div className="current-results">
        <div className="results-top">
            <div>
                <p className="pollution-city">{pollution?.city}</p>
            </div>
            <img alt="weather" className="weather-icon" src="/icons/cross-mark.button.png"/>
        </div>
        <div className="results-bottom">
            <p className="temp">BAD</p>
            <div className="details">
                <div className="param-row">
                    <span className="param-label-top">Details</span>
                </div>
                <div className="param-row">
                    <span className="param-label">Ozone</span>
                    <span className="param-value">o3</span>
                </div>
                <div className="param-row">
                    <span className="param-label">Particle</span>
                    <span className="param-value">PM10</span>
                </div>
                <div className="param-row">
                    <span className="param-label">Carbon Monoxide</span>
                    <span className="param-value">co</span>
                </div>
                <div className="param-row">
                    <span className="param-label">Sulfur Dioxide</span>
                    <span className="param-value">SO2</span>
                </div>
                <div className="param-row">
                    <span className="param-label">Nitrogen Dioxide</span>
                    <span className="param-value">no2</span>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}