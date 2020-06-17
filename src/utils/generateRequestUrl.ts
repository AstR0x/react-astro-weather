import { OptionalParam } from '../entities';
import { API_URL } from '../constants';
import { WEATHER_TOKEN } from '../secret-token.json';

const generateRequestUrl = (optionalParams: Array<OptionalParam>) => {
  const allParams = [...optionalParams, WEATHER_TOKEN];
  const params = `?${allParams.map(param => `${param.name}=${param.value}`).join('&')}`;

  return API_URL + params;
};

export { generateRequestUrl };
