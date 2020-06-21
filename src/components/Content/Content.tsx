import React from 'react';

import { YMaps, Map } from 'react-yandex-maps';

import { Spinner } from 'react-bootstrap';

import { CurrentWeather } from 'components/CurrentWeather';
import { DailyForecasts } from 'components/DailyForecasts';

import { IForecast } from 'interfaces';

import styles from './Content.module.scss';

interface ContentProps {
  forecast: IForecast;
  isLoading: boolean;
  isNotFound: boolean;
}

const Content: React.FC<ContentProps> = ({
  forecast,
  isLoading,
  isNotFound,
}) => {
  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Spinner variant="primary" animation="border" />
      </div>
    );
  }

  if (isNotFound) {
    return (
      <div className={styles.isNotFound}>
        <h2>Город не найден</h2>
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <div className={styles.firstLine}>
        <CurrentWeather currentWeather={forecast.currentWeather} />
        <div className={styles.mapContainer}>
          <YMaps>
            <Map
              height={300}
              width={540}
              defaultState={{ center: [forecast.currentWeather.coords.latitude, forecast.currentWeather.coords.longitude], zoom: 8 }}
            />
          </YMaps>
        </div>
      </div>
      <DailyForecasts dailyForecasts={forecast.dailyForecasts} />
    </div>
  );
};

export { Content };
