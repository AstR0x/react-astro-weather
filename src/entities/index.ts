export interface ReceivedDataFromAPI {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  wind: {
    speed: number;
    deg: number;
  };
}

export interface WeatherData {
  city: string,
  country: string,
  temp: {
    current: number,
    max: number,
    min: number,
    feelsLike: number,
  },
  pressure: number,
  icon: string,
  description: string,
  wind: {
    speed: number;
    deg: number;
  };
}

export interface OptionalParam {
  name: string,
  value: string | number,
}
