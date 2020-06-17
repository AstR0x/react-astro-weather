import React, { useReducer } from 'react';

import { Context, reducer, initialState } from './reducer';

import { Header } from './components/Header';
import { Content } from './components/Content';

import styles from './App.module.scss';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.app}>
      <Context.Provider value={{ state, dispatch }}>
        <Header />
        <Content />
      </Context.Provider>
    </div>
  );
};

export default App;
