import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { IDailyForecast } from 'interfaces';

import styles from './DailyForecast.module.scss';

interface IDailyForecastsProps {
  daily: IDailyForecast[];
}

const DailyForecasts: React.FC<IDailyForecastsProps> = ({ daily }) => (
  <div className={styles.dailyForecasts}>
    {daily.map(({ temp, icon, cityDate, description }) => (
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
