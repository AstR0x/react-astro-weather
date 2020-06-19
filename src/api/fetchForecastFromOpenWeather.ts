import { generateRequestUrl } from './generateRequestUrl';

interface IFetchForecast {
  cityName?: string;
  coords?: {
    latitude: number;
    longitude: number;
  };
}

export const fetchForecastFromOpenWeather = async ({ cityName, coords }: IFetchForecast) => {
  const currentWeatherParams = cityName
    ? [{
      name: 'q',
      value: cityName,
    }]
    : [
      {
        name: 'lat',
        value: coords!.latitude,
      },
      {
        name: 'lon',
        value: coords!.longitude,
      }];

  const currentWeatherResponse = await fetch(generateRequestUrl(['weather'], currentWeatherParams));
  const currentWeather = await currentWeatherResponse.json();

  if (currentWeather.cod !== 200) {
    return { cod: currentWeather.cod, message: 'Город не найден' };
  }

  const dailyForecastsParams = [
    {
      name: 'lat',
      value: currentWeather.coord.lat,
    },
    {
      name: 'lon',
      value: currentWeather.coord.lon,
    },
    {
      name: 'exclude',
      value: 'hourly,minutely,current',
    },
  ];

  const dailyForecastsResponse = await fetch(generateRequestUrl(['onecall'], dailyForecastsParams));
  const dailyForecasts = await dailyForecastsResponse.json();

  return { current: currentWeather, daily: dailyForecasts, cod: currentWeather.cod };
};
