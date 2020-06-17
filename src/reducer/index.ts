import { createContext } from 'react';

import { UPDATE_WEATHER_DATA, UPDATE_IS_LOADING } from '../actions';

import { ContextProps, State, Action } from '../entities';

export const initialState = {
  weatherData: {
    city: '',
    country: '',
    temp: 0,
    icon: '',
    description: '',
  },
  isLoading: true,
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case UPDATE_WEATHER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_IS_LOADING:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const Context = createContext({} as ContextProps);
