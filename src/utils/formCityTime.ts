import { MILLISECONDS_IN_SECOND, SECONDS_IN_HOUR } from '../constants';
import { IFormCityTime } from '../interfaces';

interface IFormLocalTimeProps {
  dt: number;
  timezone: number;
}

export const formCityTime = ({
  timezone,
  dt,
}: IFormLocalTimeProps): IFormCityTime => {
  const localDate = new Date(dt * MILLISECONDS_IN_SECOND);
  const hourShift = timezone / SECONDS_IN_HOUR;
  const minutesShift = timezone % SECONDS_IN_HOUR || 0;

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
  };

  const cityTime = new Date(
    localDate.getUTCFullYear(),
    localDate.getUTCMonth(),
    localDate.getUTCDate(),
    localDate.getUTCHours() + hourShift,
    localDate.getUTCMinutes() + minutesShift,
    localDate.getUTCSeconds(),
  );

  const [weekDay, date, time] = cityTime
    .toLocaleString('ru', options)
    .replace(/\sг./g, '')
    .split(', ');

  return { weekDay, date, time };
};
