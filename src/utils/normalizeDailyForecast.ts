import { IReceivedDailyForecast } from 'interfaces';

import { formCityTime } from './formCityTime';
import { processTemperature } from './processTemperature';

export const normalizeDailyForecast = ({
  timezone_offset: timezone,
  daily,
}: IReceivedDailyForecast) => {
  const dailyForecasts = daily.map(({ dt, temp, weather }) => ({
    cityDate: formCityTime({ dt, timezone }),
    description: weather[0].description,
    icon: weather[0].icon,
    temp: {
      day: processTemperature(temp.day),
      night: processTemperature(temp.night),
    },
  }));

  return dailyForecasts;
};
