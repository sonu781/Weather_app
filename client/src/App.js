import React, { useState } from "react";
import axios from "axios";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherChart from "./components/WeatherChart";

import "./App.css";


const App = () => {
    const [weather, setWeather] = useState(null);

    const fetchWeather = async (city) => {
        try {
            const response = await axios.get(
                `http://localhost:5000/weather?city=${city}`
            );
            setWeather(response.data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    return (
        <div className="app-container">
            <h1>Weather Dashboard</h1>
            <WeatherForm fetchWeather={fetchWeather} />
            <WeatherDisplay weather={weather} />
            <WeatherChart weather={weather} />
        </div>
    );
};

export default App;
