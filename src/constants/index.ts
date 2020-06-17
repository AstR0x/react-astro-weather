export const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const initialWeatherData = {
  city: '',
  icon: '',
  country: '',
  description: '',
  temp: {
    current: 0,
    max: 0,
    min: 0,
    feelsLike: 0,
  },
  pressure: 0,
  wind: {
    speed: 0,
    deg: 0,
  },
};
