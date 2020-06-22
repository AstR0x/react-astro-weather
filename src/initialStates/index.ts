export const today = {
  icon: '',
  city: '',
  country: '',
  pressure: 0,
  humidity: 0,
  description: '',
  temp: {
    current: '',
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
  coords: {
    latitude: 0,
    longitude: 0,
  },
};

export const daily = [
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
  today,
  daily,
};
