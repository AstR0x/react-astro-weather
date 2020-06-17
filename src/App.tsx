import React, { useState } from 'react';

import useAsyncEffect from 'use-async-effect';

import { Header } from './components/Header';
import { Content } from './components/Content';
import { generateRequestUrl, normalizeWeatherData, getCurrentPosition } from './utils';
import { initialWeatherData } from './constants';
import { WeatherData } from './entities';

import styles from './App.module.scss';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherData>(initialWeatherData);

  useAsyncEffect(async () => {
    const { coords } = await getCurrentPosition();
    const { latitude, longitude } = coords;

    const params = [
      {
        name: 'lat',
        value: latitude,
      },
      {
        name: 'lon',
        value: longitude,
      },
    ];

    const response = await fetch(generateRequestUrl(params));
    const data = await response.json();

    data.cod === 200
      ? setWeatherData(normalizeWeatherData(data))
      : setIsNotFound(true);

    setIsLoading(false);
  }, []);

  const updateWeatherData = async (searchValue: string) => {
    setIsNotFound(false);
    setIsLoading(true);

    const parameter = [{ name: 'q', value: searchValue }];
    const response = await fetch(generateRequestUrl(parameter));
    const data = await response.json();

    data.cod === 200
      ? setWeatherData(normalizeWeatherData(data))
      : setIsNotFound(true);

    setIsLoading(false);
  };

  return (
    <div className={styles.app}>
      <Header updateWeatherData={updateWeatherData} />
      <Content
        isNotFound={isNotFound}
        isLoading={isLoading}
        weatherData={weatherData}
      />
    </div>
  );
};

export default App;
