import { WeatherDetails } from './weather-details.model';
import { WeatherForecast } from './weather-forecast.model';

export class Weather {
  constructor(
    private place: string,
    private icon: string | null,
    private temp: number,
    private details: WeatherDetails,
    private forecast: WeatherForecast[]
  ) {}

  public hasIcon() {
    return this.icon !== null;
  }

  public getPlace() {
    return this.place;
  }

  public getIcon() {
    return this.icon;
  }

  public getTemp() {
    return Math.round(this.temp);
  }

  public getDescription() {
    return this.details.getDescription();
  }

  public getHumidity() {
    return this.details.getHumidity();
  }

  public getWind() {
    return this.details.getWind();
  }

  public getTempMax() {
    return this.details.getTempMax();
  }

  public getTempMin() {
    return this.details.getTempMin();
  }

  public getFeelsLike() {
    return this.details.getFeelsLike();
  }

  public getForecast() {
    return this.forecast;
  }
}
