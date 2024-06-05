import { WeatherDetails } from './weather-details.model';
import { Weather } from './weather.model';

export const NullWeather = new Weather(
  'None',
  null,
  0,
  new WeatherDetails(0, 0, 0, 'None', 0, 0),
  []
);
