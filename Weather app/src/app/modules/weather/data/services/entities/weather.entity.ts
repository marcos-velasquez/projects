export interface WeatherEntity {
  location: Location;
  current: Current;
  forecast: Forecast;
}

export interface Current {
  temp_c: number;
  condition: CurrentCondition;
  wind_mph: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
}

export interface CurrentCondition {
  text: string;
  icon: string;
  code: number;
}

export interface Forecast {
  forecastday: Forecastday[];
}

export interface Forecastday {
  date: Date;
  day: Day;
}
export interface Day {
  maxtemp_c: number;
  mintemp_c: number;
  avghumidity: number;
  condition: DayCondition;
}

export interface DayCondition {
  icon: string;
  code: number;
  text: string;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
}
