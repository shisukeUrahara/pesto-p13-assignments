const axios = require("axios");
const BASE_URL = "http://api.openweathermap.org/data/2.5";
const FORECAST_BASE_URL = "https://pro.openweathermap.org/data/2.5";

const getWeatherData = async (endpoint, params) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      params: {
        ...params,
        appid: process.env.OPEN_WEATHER_API_KEY,
      },
    });
    // console.log("**@ the response is , ", response);
    return response.data;
  } catch (error) {
    // console.log("**@ the error is , ", error);
    // console.log("**@ the api key  is , ", process.env.OPEN_WEATHER_API_KEY);

    throw new Error("Error fetching data from OpenWeatherMap");
  }
};

const getForecastData = async (endpoint, params) => {
  try {
    const response = await axios.get(`${FORECAST_BASE_URL}/${endpoint}`, {
      params: {
        ...params,
        appid: process.env.OPEN_WEATHER_API_KEY,
      },
    });
    // console.log("**@ the response is , ", response);
    return response.data;
  } catch (error) {
    // console.log("**@ the error is , ", error);
    // console.log("**@ the api key  is , ", process.env.OPEN_WEATHER_API_KEY);

    throw new Error("Error fetching data from OpenWeatherMap");
  }
};

module.exports = {
  getWeatherData,
  getForecastData,
};
