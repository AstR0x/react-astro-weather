import { IOptionalParam } from '../interfaces';
import { WEATHER_TOKEN } from '../secret-token.json';

const API_URL = 'https://api.openweathermap.org/data/2.5/';

const commonParams = [
  {
    name: 'units',
    value: 'metric',
  },
  {
    name: 'lang',
    value: 'ru',
  },
  WEATHER_TOKEN,
];

const generateRequestUrl = (path: Array<string>, optionalParams: Array<IOptionalParam>) => {
  const allParams = [...optionalParams, ...commonParams];
  const params = `?${allParams.map((param) => `${param.name}=${param.value}`).join('&')}`;

  return API_URL + path.join('/') + params;
};

export { generateRequestUrl };
