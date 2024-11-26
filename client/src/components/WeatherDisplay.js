const WeatherDisplay = ({ weather }) => {
    return weather ? (
        <div>
            <h2>Weather in {weather.name}</h2>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Conditions: {weather.weather[0].description}</p>
        </div>
    ) : (
        <p>No weather data available</p>
    );
};

export default WeatherDisplay;
