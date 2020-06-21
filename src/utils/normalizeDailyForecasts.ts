import { IReceivedDailyForecastFromAPI } from 'interfaces';

import { formCityTime } from './formCityTime';
import { processTemperature } from './processTemperature';

export const normalizeDailyForecasts = ({
  timezone_offset: timezone,
  daily,
}: IReceivedDailyForecastFromAPI) => {
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
