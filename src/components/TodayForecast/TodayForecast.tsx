import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ITodayForecast } from 'interfaces';

import { ReactComponent as WindIcon } from 'assets/icons/wind.svg';
import { ReactComponent as BarometerIcon } from 'assets/icons/barometer.svg';
import { ReactComponent as DropIcon } from 'assets/icons/drop.svg';
import { ReactComponent as SunriseIcon } from 'assets/icons/sunrise.svg';
import { ReactComponent as SunsetIcon } from 'assets/icons/sunset.svg';

import styles from './TodayForecast.module.scss';

interface ITodayForecastProps {
  today: ITodayForecast;
}

const TodayForecast: React.FC<ITodayForecastProps> = ({ today }) => (
  <div className={styles.currentWeather}>
    <div className={styles.header}>
      <div>
        <span className={styles.weekDay}>{today.cityDate.weekDay}</span>
        <span className={styles.date}>{today.cityDate.date}</span>
        <span className={styles.time}>{today.cityDate.time}</span>
      </div>
      <div className={styles.location}>
        <span>Погода в </span>
        <span className={styles.city}>{`${today.city}, ${today.country}`}</span>
      </div>
    </div>
    <div className={styles.important}>
      <p className={styles.currentTemperature}>{today.temp.current}&#176;</p>
      <img
        className={styles.icon}
        src={`http://openweathermap.org/img/wn/${today.icon}@2x.png`}
        alt="weather-icon"
      />
      <div>
        <p className={styles.description}>{today.description}</p>
        <p className={styles.feelsLike}>
          Ощущается как: {today.temp.feelsLike}&#176;
        </p>
      </div>
    </div>
    <div className={styles.line} />
    <div className={styles.footer}>
      <div>
        <span className={styles.windSpeed}>
          <WindIcon className={styles.footerIcon} />
          {today.wind.speed} м/с
        </span>
        <span className={styles.humidity}>
          <DropIcon className={styles.footerIcon} />
          {today.humidity} %
        </span>
        <span className={styles.pressure}>
          <BarometerIcon className={styles.footerIcon} />
          {today.pressure} мм рт. ст.
        </span>
      </div>
      <div>
        <span>
          <SunriseIcon className={styles.footerIcon} />
          {today.sunrise.time}
        </span>
        <span className={styles.sunset}>
          <SunsetIcon className={styles.footerIcon} />
          {today.sunset.time}
        </span>
      </div>
    </div>
  </div>
);

export { TodayForecast };
