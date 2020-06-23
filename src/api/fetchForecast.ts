import { ISearchParams } from 'interfaces';

import { generateRequestUrl } from './generateRequestUrl';

export const fetchForecast = async ({ cityName, coords }: ISearchParams) => {
  const todayParams = cityName
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

  const todayResponse = await fetch(generateRequestUrl(['weather'], todayParams));
  const today = await todayResponse.json();

  if (today.cod !== 200) {
    return { cod: today.cod, message: 'Город не найден' };
  }

  const dailyParams = [
    {
      name: 'lat',
      value: today.coord.lat,
    },
    {
      name: 'lon',
      value: today.coord.lon,
    },
    {
      name: 'exclude',
      value: 'hourly,minutely,current',
    },
  ];

  const dailyResponse = await fetch(generateRequestUrl(['onecall'], dailyParams));
  const daily = await dailyResponse.json();

  return { today, daily, cod: today.cod };
};
