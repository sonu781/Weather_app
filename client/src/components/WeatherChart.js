import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const WeatherChart = ({ weather }) => {
    if (!weather || !weather.forecast) return null;

    const data = {
        labels: weather.forecast.map((item) => item.date),
        datasets: [
            {
                label: "Temperature (°C)",
                data: weather.forecast.map((item) => item.temperature),
                fill: false,
                borderColor: "#0078d7",
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: `Weather Forecast for ${weather.city}`,
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default WeatherChart;
