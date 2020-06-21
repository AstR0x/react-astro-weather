import { IReceivedCurrentWeatherFromAPI } from 'interfaces';

import { formCityTime } from './formCityTime';
import { processTemperature } from './processTemperature';

export const normalizeCurrentWeather = ({
  name,
  sys,
  main,
  weather,
  wind,
  dt,
  timezone,
  coord,
}: IReceivedCurrentWeatherFromAPI) => ({
  city: name,
  country: sys.country,
  temp: {
    current: processTemperature(main.temp),
    max: processTemperature(main.temp_max),
    min: processTemperature(main.temp_min),
    feelsLike: processTemperature(main.feels_like),
  },
  pressure: main.pressure,
  humidity: main.humidity,
  icon: weather[0].icon,
  description: weather[0].description,
  cityDate: formCityTime({ dt, timezone }),
  sunrise: formCityTime({ dt: sys.sunrise, timezone }),
  sunset: formCityTime({ dt: sys.sunset, timezone }),
  coords: {
    latitude: coord.lat,
    longitude: coord.lon,
  },
  wind,
});
