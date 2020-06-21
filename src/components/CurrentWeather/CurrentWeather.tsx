import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ICurrentWeather } from 'interfaces';

import { ReactComponent as WindIcon } from 'assets/icons/wind.svg';
import { ReactComponent as BarometerIcon } from 'assets/icons/barometer.svg';
import { ReactComponent as DropIcon } from 'assets/icons/drop.svg';
import { ReactComponent as SunriseIcon } from 'assets/icons/sunrise.svg';
import { ReactComponent as SunsetIcon } from 'assets/icons/sunset.svg';

import styles from './CurrentWeather.module.scss';

interface ICurrentWeatherProps {
  currentWeather: ICurrentWeather;
}

const CurrentWeather: React.FC<ICurrentWeatherProps> = ({ currentWeather }) => {
  return (
    <div className={styles.currentWeather}>
      <div className={styles.header}>
        <div>
          <span className={styles.weekDay}>
            {currentWeather.cityDate.weekDay}
          </span>
          <span className={styles.date}>{currentWeather.cityDate.date}</span>
          <span className={styles.time}>{currentWeather.cityDate.time}</span>
        </div>
        <div className={styles.location}>
          <span>Погода в </span>
          <span className={styles.city}>
            {`${currentWeather.city}, ${currentWeather.country}`}
          </span>
        </div>
      </div>
      <div className={styles.important}>
        <p className={styles.currentTemperature}>
          {currentWeather.temp.current}&#176;
        </p>
        <img
          className={styles.icon}
          src={`http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
          alt="weather-icon"
        />
        <div>
          <p className={styles.description}>{currentWeather.description}</p>
          <p className={styles.feelsLike}>
            Ощущается как: {currentWeather.temp.feelsLike}&#176;
          </p>
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.footer}>
        <div>
          <span className={styles.windSpeed}>
            <WindIcon className={styles.footerIcon} />
            {currentWeather.wind.speed} м/с
          </span>
          <span className={styles.humidity}>
            <DropIcon className={styles.footerIcon} />
            {currentWeather.humidity} %
          </span>
          <span className={styles.pressure}>
            <BarometerIcon className={styles.footerIcon} />
            {currentWeather.pressure} мм рт. ст.
          </span>
        </div>
        <div>
          <span>
            <SunriseIcon className={styles.footerIcon} />{currentWeather.sunrise.time}
          </span>
          <span className={styles.sunset}>
            <SunsetIcon className={styles.footerIcon} />{currentWeather.sunset.time}
          </span>
        </div>
      </div>
    </div>
  );
};

export { CurrentWeather };
