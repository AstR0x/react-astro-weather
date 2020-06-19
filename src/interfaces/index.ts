export interface IReceivedCurrentWeatherFromAPI {
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
    humidity: number;
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

export interface IReceivedDailyForecastFromAPI {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  daily: [
    {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: {
        day: number;
        eve: number;
        morn: number;
        night: number;
      };
      humidity: number;
      pressure: number;
      rain: number;
      sunrise: number;
      sunset: number;
      temp: {
        day: number;
        eve: number;
        max: number;
        min: number;
        mon: number;
        night: number;
      };
      uvi: number;
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
      wind_deg: number;
      wind_speed: number;
    }
  ];
}

export interface ICurrentWeather {
  city: string;
  country: string;
  temp: {
    current: string;
    max: string;
    min: string;
    feelsLike: string;
  };
  pressure: number;
  humidity: number;
  icon: string;
  description: string;
  wind: {
    speed: number;
    deg: number;
  };
  sunrise: IFormCityTime,
  sunset: IFormCityTime,
  cityDate: IFormCityTime;
}

export interface IDailyForecast {
  cityDate: IFormCityTime;
  description: string;
  icon: string;
  temp: {
    day: string;
    night: string;
  };
}

export interface IForecast {
  dailyForecasts: IDailyForecast[],
  currentWeather: ICurrentWeather,
}

export interface IOptionalParam {
  name: string;
  value: string | number;
}

export interface IFormCityTime {
  weekDay: string;
  date: string;
  time: string;
}
