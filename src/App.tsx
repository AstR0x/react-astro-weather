import React, { useState } from 'react';

import useAsyncEffect from 'use-async-effect';

import { Header } from 'components/Header';
import { Content } from 'components/Content';

import { fetchForecast } from 'api';

import {
  getCurrentPosition,
  normalizeTodayForecast,
  normalizeDailyForecast,
} from 'utils';

import { initialForecast } from 'initialStates';
import { IForecast } from 'interfaces';

import styles from 'App.module.scss';

import { MOSCOW_COORDS } from './constants';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);
  const [forecast, setForecast] = useState<IForecast>(initialForecast);

  useAsyncEffect(async () => {
    const coords = MOSCOW_COORDS;

    try {
      const data = await getCurrentPosition();
      coords.latitude = data.coords.latitude;
      coords.longitude = data.coords.longitude;
    } catch (e) {
      console.log(e.message);
    }

    const forecastData = await fetchForecast({ coords });

    if (forecastData.cod === 200) {
      setForecast({
        daily: normalizeDailyForecast(forecastData.daily),
        today: normalizeTodayForecast(forecastData.today),
      });
    } else {
      setIsNotFound(true);
    }

    setIsLoading(false);
  }, []);

  const updateWeatherData = async (searchValue: string) => {
    setIsNotFound(false);
    setIsLoading(true);

    const forecastData = await fetchForecast({
      cityName: searchValue,
    });

    if (forecastData.cod === 200) {
      setForecast({
        daily: normalizeDailyForecast(forecastData.daily),
        today: normalizeTodayForecast(forecastData.today),
      });
    } else {
      setIsNotFound(true);
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.app}>
      <Header updateWeatherData={updateWeatherData} />
      <Content
        isNotFound={isNotFound}
        isLoading={isLoading}
        forecast={forecast}
      />
    </div>
  );
};

export default App;
