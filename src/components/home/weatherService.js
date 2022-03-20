import axios from 'axios';

const API_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = '7547b8ef1c9091f123937b2853d9cec6';

const fetchWeather = async (lat, long) => {
  try {
    const response = await axios.get(`${API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export default fetchWeather;
