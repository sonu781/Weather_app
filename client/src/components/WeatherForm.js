import React, { useState } from "react";
import "./WeatherForm.css"; 

const WeatherForm = ({ fetchWeather }) => {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            fetchWeather(city);
            setCity("");
        }
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input
                type="text"
                className="input-field"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className="submit-button">
                Search
            </button>
        </form>
    );
};

export default WeatherForm;
