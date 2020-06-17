import React from 'react';

import { WeatherInfo } from '../WeatherInfo';

import styles from './Content.module.scss';

const Content: React.FC = () => (
  <div className={styles.content}>
    <WeatherInfo />
  </div>
);

export { Content };
