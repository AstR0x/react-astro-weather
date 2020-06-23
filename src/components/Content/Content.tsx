import React from 'react';

import { YMaps, Map } from 'react-yandex-maps';

import { Spinner } from 'react-bootstrap';

import { TodayForecast } from 'components/TodayForecast';
import { DailyForecasts } from 'components/DailyForecasts';

import { IForecast } from 'interfaces';

import styles from './Content.module.scss';

interface ContentProps {
  forecast: IForecast;
  isLoading: boolean;
  isNotFound: boolean;
}

const { width, height } = window.screen;

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
        <TodayForecast today={forecast.today} />
        {width > height && (
          <div className={styles.mapContainer}>
            <YMaps>
              <Map
                height={300}
                width={575}
                defaultState={{
                  center: [
                    forecast.today.coords.latitude,
                    forecast.today.coords.longitude,
                  ],
                  zoom: 12,
                }}
              />
            </YMaps>
          </div>
        )}
      </div>
      <DailyForecasts daily={forecast.daily} />
    </div>
  );
};

export { Content };
