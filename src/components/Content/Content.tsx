import React from 'react';

import { Spinner } from 'react-bootstrap';

import { CurrentWeather } from '../CurrentWeather';
import { DailyForecasts } from '../DailyForecasts';
import { IForecast } from '../../interfaces';

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
      <CurrentWeather currentWeather={forecast.currentWeather} />
      <DailyForecasts dailyForecasts={forecast.dailyForecasts} />
    </div>
  );
};

export { Content };
