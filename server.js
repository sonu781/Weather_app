
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config(); 
const app = express();
app.use(cors());

app.get("/weather", async (req, res) => {
    const { city } = req.query;
    const apiKey = process.env.API_KEY; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
