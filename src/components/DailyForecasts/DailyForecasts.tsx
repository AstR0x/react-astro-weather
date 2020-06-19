import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './DailyForecast.module.scss';

import { IDailyForecast } from '../../interfaces';

interface IDailyForecastsProps {
  dailyForecasts: IDailyForecast[];
}

const DailyForecasts: React.FC<IDailyForecastsProps> = ({ dailyForecasts }) => (
  <div className={styles.dailyForecasts}>
    {dailyForecasts.map(({ temp, icon, cityDate, description }) => (
      <div key={cityDate.date} className={styles.dayForecast}>
        <div className={styles.weekDay}>{cityDate.weekDay}</div>
        <div className={styles.date}>{cityDate.date}</div>
        <div className={styles.iconContainer}>
          <img
            className={styles.icon}
            alt="Иконка погоды"
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          />
        </div>
        <div>
          <div className={styles.dayTemp}>{temp.day}&#176;</div>
          <div className={styles.nightTemp}>{temp.night}&#176;</div>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    ))}
  </div>
);
export { DailyForecasts };
