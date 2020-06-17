import React, { useContext } from 'react';

import useAsyncEffect from 'use-async-effect';

import { Spinner } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './WeatherInfo.module.scss';

import { Context } from '../../reducer';
import { WeatherData } from '../../entities';
import { updateIsLoading, updateWeatherData } from '../../actions';
import { generateRequestUrl } from '../../utils/generateRequestUrl';

const WeatherInfo: React.FC = () => {
  const { dispatch, state } = useContext(Context);

  const boundUpdateIsLoading = (isLoading: boolean) => (
    dispatch(updateIsLoading(isLoading))
  );

  const boundUpdateWeatherData = (weatherData: WeatherData) => (
    dispatch(updateWeatherData(weatherData))
  );

  useAsyncEffect(async () => {
    navigator.geolocation.getCurrentPosition(async position => {
      const { latitude, longitude } = position.coords;
      const params = [
        {
          name: 'lat',
          value: latitude,
        },
        {
          name: 'lon',
          value: longitude,
        },
      ];

      boundUpdateIsLoading(true);

      const response = await fetch(generateRequestUrl(params));

      const {
        name,
        sys,
        main,
        weather,
      } = await response.json();

      const weatherData = {
        city: name,
        country: sys.country,
        temp: main.temp,
        icon: weather[0].icon,
        description: weather[0].main,
      };

      boundUpdateWeatherData(weatherData);
      boundUpdateIsLoading(false);
    });
  }, []);

  return !state.isLoading ? (
    <div className={styles.weatherInfo}>
      <div className={styles.header}>
        <span>Weather in</span>
        <span className={styles.location}>
          {`${state.weatherData.city}, ${state.weatherData.country}`}
        </span>
      </div>
      <div className={styles.importantInfo}>
        <p className={styles.temperature}>
          +{Math.round(state.weatherData.temp - 273.15)}
        </p>
        <img
          className={styles.icon}
          src={`http://openweathermap.org/img/wn/${state.weatherData.icon}@2x.png`}
          alt="weather-icon"
        />
        <p className={styles.description}>{state.weatherData.description}</p>
      </div>
    </div>
  ) : (
    <div className={styles.loader}>
      <Spinner variant="primary" animation="border" />
    </div>
  );
};

export { WeatherInfo };
