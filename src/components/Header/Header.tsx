import React, { useState } from 'react';

import { useDebouncedCallback } from 'use-debounce';

import { Navbar, Form } from 'react-bootstrap';

import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as CloudIcon } from 'assets/icons/cloud.svg';

import { fetchAddresses } from 'api';

import { IAddress, ISearchParams } from 'interfaces';

import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './Header.module.scss';

interface HeaderProps {
  updateForecast: ({ coords, cityName }: ISearchParams) => void;
}

const Header: React.FC<HeaderProps> = ({ updateForecast }) => {
  const [cityName, setCityName] = useState<string>('');
  const [addresses, setAddresses] = useState<IAddress[]>([]);

  const [debouncedSetAddresses] = useDebouncedCallback(async (name: string) => {
    const { suggestions } = await fetchAddresses(name);
    setAddresses(suggestions);
  }, 500);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetAddresses(event.target.value);
    setCityName(event.target.value);
  };

  const handleClick = (address: IAddress) => () => {
    const coords = {
      latitude: parseFloat(address.data.geo_lat),
      longitude: parseFloat(address.data.geo_lon),
    };

    updateForecast({ coords });
    setAddresses([]);
    setCityName('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    updateForecast({ cityName });
    setAddresses([]);
    setCityName('');
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
            <input
              value={cityName}
              onChange={handleChange}
              className={styles.input}
              placeholder="Город или район"
              type="text"
              required
            />
            <SearchIcon className={styles.searchIcon} />
            {addresses.length ? (
              <ul className={styles.addresses}>
                {addresses.map((address: IAddress) => (
                  <li className={styles.address} key={address.value}>
                    <button
                      onClick={handleClick(address)}
                      className={styles.button}
                      type="button"
                    >
                      {address.value}
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </Form>
        </div>
      </Navbar>
    </header>
  );
};

export { Header };
