import React, { useState } from 'react';

import { DebounceInput } from 'react-debounce-input';
import { Navbar, Form } from 'react-bootstrap';

import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as CloudIcon } from 'assets/icons/cloud.svg';

import { fetchAddresses } from 'api';

import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './Header.module.scss';

interface HeaderProps {
  updateWeatherData: (searchValue: string) => void;
}

const Header: React.FC<HeaderProps> = ({ updateWeatherData }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [addresses, setAddresses] = useState<any>([]);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { suggestions } = await fetchAddresses(event.target.value);

    setSearchValue(event.target.value);
    setAddresses(suggestions);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSearchValue('');
    updateWeatherData(searchValue);
  };

  return (
    <header className={styles.header}>
      <Navbar className={styles.navbar}>
        <Navbar.Brand className={styles.logo} href="/">
          <CloudIcon className={styles.cloudIcon} />
          <span className={styles.name}>Astro Weather</span>
        </Navbar.Brand>
        <div className={styles.formContainer}>
          <Form onSubmit={handleSubmit}>
            <DebounceInput
              value={searchValue}
              minLength={2}
              debounceTimeout={800}
              onChange={handleChange}
              className={styles.input}
              type="text"
              placeholder="Город или район"
              required
            />
            <SearchIcon className={styles.searchIcon} />
          </Form>
          {addresses.length ? (
            <ul className={styles.addresses}>
              {addresses.map((address: any) => (
                <li className={styles.address} key={address.value}>
                  {address.value}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Navbar>
    </header>
  );
};

export { Header };
