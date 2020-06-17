import { WeatherData } from '../entities';

export const UPDATE_WEATHER_DATA = 'UPDATE_WEATHER_DATA';
export const UPDATE_IS_LOADING = 'UPDATE_IS_LOADING';

export const updateIsLoading = (isLoading: boolean) => ({ type: UPDATE_IS_LOADING, payload: { isLoading } });
export const updateWeatherData = (weatherData: WeatherData) => ({ type: UPDATE_WEATHER_DATA, payload: { weatherData } });
