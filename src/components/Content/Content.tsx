import React from 'react';

import { Spinner } from 'react-bootstrap';

import { WeatherInfo } from '../WeatherInfo';
import { WeatherData } from '../../entities';

import styles from './Content.module.scss';

interface ContentProps {
  weatherData: WeatherData;
  isLoading: boolean;
  isNotFound: boolean;
}

const Content: React.FC<ContentProps> = ({
  weatherData,
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
        <h2>City is not found</h2>
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <WeatherInfo weatherData={weatherData} />
    </div>
  );
};

export { Content };
