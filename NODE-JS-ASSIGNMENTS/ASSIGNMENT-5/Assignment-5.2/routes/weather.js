const express = require("express");
const {
  getCities,
  getForecast,
  getCurrentWeather,
  filterWeatherData,
} = require("../controllers/weatherController");

const router = express.Router();

router.get("/cities", getCities);
router.get("/forecast", getForecast);
router.get("/current", getCurrentWeather);
router.get("/filter", filterWeatherData);

module.exports = router;
