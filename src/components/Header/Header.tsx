import React, { useState } from 'react';

import { Navbar, Form, FormControl } from 'react-bootstrap';

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './Header.module.scss';

interface HeaderProps {
  updateWeatherData: (searchValue: string) => void;
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
      <Navbar className={styles.navbar} expand="lg">
        <Navbar.Brand href="/">Astro Weather</Navbar.Brand>
        <Form onSubmit={handleSubmit} inline>
          <FormControl
            onChange={handleChange}
            value={searchValue}
            type="text"
            placeholder="Город или район"
            className={styles.input}
          />
          <SearchIcon className={styles.icon} />
        </Form>
      </Navbar>
    </header>
  );
};

export { Header };
