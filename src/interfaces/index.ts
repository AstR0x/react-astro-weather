export interface IReceivedTodayForecast {
  timezone: number;
  name: string;
  cod: number;
  dt: number;
  coord: {
    lon: number;
    lat: number;
  };
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  wind: {
    speed: number;
    deg: number;
  };
}

export interface IReceivedDailyForecast {
  timezone_offset: number;
  daily: [
    {
      dt: number;
      humidity: number;
      pressure: number;
      sunrise: number;
      sunset: number;
      temp: {
        day: number;
        night: number;
      };
      weather: [
        {
          description: string;
          icon: string;
        }
      ];
      wind_deg: number;
      wind_speed: number;
    }
  ];
}

export interface ITodayForecast {
  city: string;
  country: string;
  temp: {
    current: string;
    feelsLike: string;
  };
  wind: {
    speed: number;
    deg: number;
  };
  pressure: number;
  humidity: number;
  icon: string;
  description: string;
  sunrise: IFormCityTime;
  sunset: IFormCityTime;
  cityDate: IFormCityTime;
  coords: ICoords,
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
  daily: IDailyForecast[];
  today: ITodayForecast;
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

export interface ICoords {
  latitude: number;
  longitude: number;
}
