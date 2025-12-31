// weatherAPI.js
import axios from 'axios';

const API_KEY = '35b813d0d4a5d07458d69e4448d30627';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherByCoordinates = async (lat, lon) => {
    console.log("Hello World");
  try {
    const response = await axios.get(
      `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    console.log(response.data);

    return response.data;

  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};


