import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './WeatherInfo.module.scss';

import { WeatherData } from '../../entities';

interface WeatheeInfoProps {
  weatherData: WeatherData,
}

const WeatherInfo: React.FC<WeatheeInfoProps> = ({ weatherData }) => {
  return (
    <div className={styles.weatherInfo}>
      <div className={styles.header}>
        <span>Weather in</span>
        <span className={styles.location}>
          {`${weatherData.city}, ${weatherData.country}`}
        </span>
      </div>
      <div className={styles.importantInfo}>
        <p className={styles.temperature}>
          +{weatherData.temp.current}
        </p>
        <img
          className={styles.icon}
          src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt="weather-icon"
        />
        <p className={styles.description}>{weatherData.description}</p>
      </div>
      <div>
        <span className={styles.max}>Max: {weatherData.temp.max}</span>
        <span className={styles.min}>Min: {weatherData.temp.min}</span>
        <span className={styles.feelsLike}>Feels like: {weatherData.temp.feelsLike}</span>
      </div>
      <div>
        <span className={styles.windSpeed}>Wind: {weatherData.wind.speed} m/s</span>
      </div>
    </div>
  );
};

export { WeatherInfo };
