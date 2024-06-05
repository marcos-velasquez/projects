import { WeatherDetails } from './weather-details.model';

export class WeatherForecast {
  constructor(
    private date: Date,
    private details: Omit<WeatherDetails, 'wind' | 'feelsLike'>
  ) {}

  public getDate() {
    return this.date;
  }

  public getDescription() {
    return this.details.getDescription();
  }

  public getHumidity() {
    return this.details.getHumidity();
  }

  public getTempMax() {
    return this.details.getTempMax();
  }

  public getTempMin() {
    return this.details.getTempMin();
  }
}
