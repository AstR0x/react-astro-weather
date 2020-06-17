import React, { useState } from 'react';

import { Navbar, Form, FormControl } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Icon } from '../Icon';

import styles from './Header.module.scss';

interface HeaderProps {
  updateWeatherData: (searchValue: string) => void,
}

const Header: React.FC<HeaderProps> = ({ updateWeatherData }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateWeatherData(searchValue);
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
};

export { Header };
