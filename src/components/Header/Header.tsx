import React, { useState, useContext } from 'react';

import { Navbar, Form, FormControl } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { generateRequestUrl } from '../../utils/generateRequestUrl';
import { updateIsLoading, updateWeatherData } from '../../actions';
import { Context } from '../../reducer';

import { Icon } from '../Icon';

import styles from './Header.module.scss';

function Header() {
  const { dispatch } = useContext(Context);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(updateIsLoading(false));
    const parameter = [{ name: 'q', value: searchValue }];

    const response = await fetch(generateRequestUrl(parameter));

    const { name, sys, main, weather, cod } = await response.json();

    const weatherData = {
      city: name,
      country: sys.country,
      temp: main.temp,
      icon: weather[0].icon,
      description: weather[0].main,
    };

    if (cod === 200) {
      dispatch(updateIsLoading(false));
      dispatch(updateWeatherData(weatherData));
    }

    setSearchValue('');
  };

  return (
    <header>
      <Navbar className={styles.navbar} bg="light" expand="lg">
        <Navbar.Brand href="/">AstroWeather</Navbar.Brand>
        <Form onSubmit={handleSubmit} inline>
          <FormControl
            onChange={handleChange}
            value={searchValue}
            type="text"
            placeholder="City"
            className={styles.input}
          />
          <div className={styles.icon}>
            <Icon />
          </div>
        </Form>
      </Navbar>
    </header>
  );
}

export { Header };
