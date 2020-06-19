export const initialCurrentWeather = {
  icon: '',
  city: '',
  country: '',
  pressure: 0,
  humidity: 0,
  description: '',
  temp: {
    current: '',
    max: '',
    min: '',
    feelsLike: '',
  },
  wind: {
    speed: 0,
    deg: 0,
  },
  cityDate: {
    weekDay: '',
    date: '',
    time: '',
  },
  sunrise: {
    weekDay: '',
    date: '',
    time: '',
  },
  sunset: {
    weekDay: '',
    date: '',
    time: '',
  },
};

export const initialDailyForecasts = [
  {
    description: '',
    icon: '',
    cityDate: {
      weekDay: '',
      date: '',
      time: '',
    },
    temp: {
      day: '',
      night: '',
    },
  },
];

export const initialForecast = {
  currentWeather: initialCurrentWeather,
  dailyForecasts: initialDailyForecasts,
};
