export interface WeatherData {
  city: string,
  country: string,
  temp: number,
  icon: string,
  description: string,
}

export interface Payload {
  weatherData?: WeatherData,
  isLoading?: boolean,
}

export interface State {
  weatherData: WeatherData,
  isLoading: boolean,
}

export interface DispatchProps {
  type: string,
  payload: Payload
}

export interface ContextProps {
  state: State;
  dispatch: ({ type, payload }: DispatchProps) => void;
}

export interface Action {
  type: string,
  payload: Payload,
}

export interface OptionalParam {
  name: string,
  value: string | number,
}
