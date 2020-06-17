import { ReceivedDataFromAPI } from '../entities';

const converteToCelsius = (degrees: number) => (Math.round(degrees - 273.15));

export const normalizeWeatherData = ({ name, sys, main, weather, wind }: ReceivedDataFromAPI) => ({
  city: name,
  country: sys.country,
  temp: {
    current: converteToCelsius(main.temp),
    max: converteToCelsius(main.temp_max),
    min: converteToCelsius(main.temp_min),
    feelsLike: converteToCelsius(main.feels_like),
  },
  pressure: main.pressure,
  icon: weather[0].icon,
  description: weather[0].main,
  wind,
});
