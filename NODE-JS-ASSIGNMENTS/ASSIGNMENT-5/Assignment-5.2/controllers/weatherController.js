const {
  getWeatherData,
  getForecastData,
} = require("../services/weatherService");

const getCities = async (req, res) => {
  const { city, code, limit = 10, offset = 0 } = req.query;
  try {
    const data = await getWeatherData("find", {
      q: city,
      id: code,
      limit,
      offset,
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getForecast = async (req, res) => {
  const { lat, lon } = req.query;
  try {
    const data = await getForecastData("forecast/hourly", {
      lat: lat,
      lon: lon,
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCurrentWeather = async (req, res) => {
  const { city } = req.query;
  try {
    const data = await getWeatherData("weather", {
      q: city,
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const filterWeatherData = async (req, res) => {
  const { city, date, moment } = req.query;
  try {
    const data = await getWeatherData("forecast", {
      q: city,
    });
    const filteredData = data.list.filter((item) => {
      const itemDate = new Date(item.dt * 1000).toISOString().split("T")[0];
      if (itemDate !== date) return false;

      const hour = new Date(item.dt * 1000).getHours();
      if (moment === "morning" && hour >= 6 && hour < 12) return true;
      if (moment === "afternoon" && hour >= 12 && hour < 18) return true;
      if (moment === "evening" && hour >= 18 && hour < 24) return true;

      return false;
    });
    res.json(filteredData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCities,
  getForecast,
  getCurrentWeather,
  filterWeatherData,
};
